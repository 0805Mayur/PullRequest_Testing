from flask import Flask,render_template,request,redirect,url_for
app=Flask(__name__)
t=[]
@app.route("/")
def a():
 return render_template("index.html",tasks=t)
@app.route("/add",methods=["POST"])
def b():
 x=request.form.get("task")
 if x!="":
  t.append(x)
 return redirect(url_for("a"))
@app.route("/delete/<int:y>")
def c(y):
 if y<len(t):
  t.pop(y)
 return redirect(url_for("a"))
app.run()
