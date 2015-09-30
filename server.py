import os
from flask import Flask, render_template

app = Flask(__name__)


# PAGE ROUTES

@app.route('/start')
def commence():
    return render_template('ff_start.html')

@app.route('/activity/<id>')
def activity():
    return render_template('ff_activity.html')

@app.route('/finish')
def complete():
    return render_template('ff_finish.html')


# REST ROUTES

@app.route('/signup', methods=['POST'])
def signup():
    return 'signed up'

@app.route('/submit', methods=['POST'])
def submit():
    return 'submitted'
