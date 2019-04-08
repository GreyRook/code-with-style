# Python Coding Guide


 * Prefer Python Version: 3.6
 * Prefer `pipenv + Pipefile` over `pip + requirements.txt`
 * We follow [PEP 8](https://www.python.org/dev/peps/pep-0008/).


 ## Preferred libraries


Library | Use Case
--------|--------------------
Pillow  | Image manipulation
pytest  | unit text execution


## creating a new project

  Use cookiecutter: ``

```
sudo pip3 install cookiecutter
mkdir ~/.cookiecutters
git clone https://github.com/FlorianLudwig/cookiecutter-py3.git ~/.cookiecutters/py3
cp -r ~/.cookiecutters/py3 ~/.cookiecutters/py3-aiohttp
cd ~/.cookiecutters/py3-aiohttp
git checkout aiohttp
```
