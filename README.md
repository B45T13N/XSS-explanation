## This project is a small project focused on XSS.
I created this project to learn more about and practice XSS. It is for educational purposes only.

## First XSS
The first XSS is a basic one.

Users can provide a parameter in the request, which is then read by the JavaScript. Subsequently, it is essentially returned.

If I add anything after the endpoint request such as :

``?input=<h2>Some stuff</h2>``

The first patch can be to add replace method. So we can filter the '<' or '>' and remove it from the input.

## Second XSS

However, this type of treatment can be easily bypassed by using a payload like :

``?input=</h1><h2>Some stuff</h2>``

The second patch use the replaceAll method, and it's effective. I didn't get any payloads to get through for the moment.