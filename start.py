from flask import Flask, render_template
from flask.ext.script import Manager
from flask.ext.assets import Environment, Bundle


app = Flask(__name__)

assets = Environment(app)
assets.url = app.static_url_path
scss = Bundle('mobile-nav.scss', 'desktop-nav.scss', 'typography.scss', filters='pyscss', output='all.css')
assets.register('scss_all', scss)

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

@app.errorhandler(500)
def internal_server_error(e):
    return render_template('500.html'), 500

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/portfolio')
def port():
    return render_template('portfolio.html')

@app.route('/C')
def C():
    return render_template('C.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0')