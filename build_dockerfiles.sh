#!/usr/bin/env bash

cd mainpage \
  && docker build . -t mainpage:latest \
  && cd ..

cd api \
  && docker build . -t api:latest \
  && cd ..
