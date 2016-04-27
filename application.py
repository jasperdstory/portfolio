from flask import Flask, render_template
from flask.ext.script import Manager
from flask.ext.assets import Environment, Bundle
from flask.ext.compress import Compress

application = Flask(__name__)


assets = Environment(application)
assets.url = app.static_url_path
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


@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

@app.errorhandler(500)
def internal_server_error(e):
    return render_template('500.html'), 500

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/sixthings')
def sixthings():
    return render_template('sixthings.html')

@app.route('/news')
def news():
    return render_template('news.html')

@app.route('/dashboards')
def dashboards():
    return render_template('dashboards.html')

@app.route('/journeys')
def journeys():
    return render_template('journeys.html')

@app.route('/googleapps')
def googleapps():
    return render_template('googleapps.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0')