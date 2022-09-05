# FROM python:3.10.0-alpine

# # set work directory
# WORKDIR /usr/src/app

# # set environment variables
# ENV PYTHONDONTWRITEBYTECODE 1
# ENV PYTHONUNBUFFERED 1

# # install dependencies
# #RUN pip install --upgrade pip 
# COPY ./djangoCrud/requirements.txt /usr/src/app
# RUN pip install -r requirements.txt

# # copy project
# COPY ./djangoCrud/ /usr/src/app

# EXPOSE 8000

# CMD ["python", "manage.py", "runserver"]


FROM  python:3.10.0-alpine
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
WORKDIR /code
COPY requirements.txt /code/
RUN pip install -r requirements.txt
COPY . /code/