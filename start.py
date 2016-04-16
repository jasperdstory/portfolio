from flask import Flask, render_template
from flask.ext.script import Manager

app = Flask(__name__)

manager = Manager(app)


@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

@app.errorhandler(500)
def internal_server_error(e):
    return render_template('500.html'), 500

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/B')
def B():
    return render_template('B.html')

@app.route('/C')
def C():
    return render_template('C.html')

@app.route('/D')
def D():
    return render_template('D.html')

@app.route('/E')
def E():
    return render_template('E.html')



if __name__ == '__main__':
    manager.run()