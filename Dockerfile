FROM ruby:2.7.1

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
    && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
    && curl -sL https://deb.nodesource.com/setup_14.x | bash - \
    && apt-get update -qq \
    && apt-get install -y nodejs yarn

RUN apt-get update && apt-get install -y \
      wget \
      xz-utils

ENV APP_PATH /myapp
RUN mkdir $APP_PATH
WORKDIR $APP_PATH

COPY . .

RUN bundle install
RUN yarn
