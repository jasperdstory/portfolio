from flask import Flask, render_template
from flask.ext.script import Manager
from flask.ext.assets import Environment, Bundle
from flask.ext.compress import Compress
from flask.ext.cdn import CDN

application = Flask(__name__)

assets = Environment(application)
assets.url = application.static_url_path
# assets.append_path('assets')

scss = Bundle('mobile-nav.scss', 'desktop-nav.scss', 
			  'typography.scss', 'desktop-page-content.scss', 
			  'mobile-page-content.scss', 'global-page-content.scss',
			  filters='pyscss, cssmin', output='all.css')
assets.register('scss_all', scss)

js = Bundle('nav.js', 'case-nav.js', 
            filters='jsmin', output='all.js')
assets.register('js_all', js)

COMPRESS_MIMETYPES = ['text/html', 'text/css', 
                      'application/javascript', 'application/x-font-opentype']
Compress(application)

application.config['CDN_DOMAIN'] = 'dn27tkn48vqxi.cloudfront.net'
CDN(application)


@application.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

@application.errorhandler(500)
def internal_server_error(e):
    return render_template('500.html'), 500

@application.route('/')
def index():
    return render_template('index.html')

@application.route('/sixthings')
def sixthings():
    return render_template('sixthings.html')

@application.route('/news')
def news():
    return render_template('news.html')

@application.route('/dashboards')
def dashboards():
    return render_template('dashboards.html')

@application.route('/journeys')
def journeys():
    return render_template('journeys.html')

@application.route('/googleapps')
def googleapps():
    return render_template('googleapps.html')


if __name__ == '__main__':
    application.run(host='0.0.0.0')