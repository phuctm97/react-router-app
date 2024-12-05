#!/bin/bash

if [ -d ".git" ]; then
  husky
fi

react-router typegen
