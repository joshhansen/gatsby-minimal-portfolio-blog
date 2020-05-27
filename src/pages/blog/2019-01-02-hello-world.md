---
title: 'Umpire: Combat Quest of the Millennium'
path: '/blog/umpire/'
date: 2020-05-26T10:43:00-08:00
author: Josh
type: post
---

For the past few years I've worked on a project called `Umpire`. It's a strategy game inspired by the classic game `Empire` from the 1980s. The purpose of the project originally was to help me learn the Rust programming language, which the game is implemented in, as well as to exercise some classic CS skills such as graph search algorithms, terminal user interfaces, and game AI.

More recently I've been using Umpire as a platform for experimenting with deep reinforcement learning algorithms using first TensorFlow and now PyTorch since TensorFlow's Rust story is not good.

This recent effort has been a good illustration of the costs and rewards of doing things that most people aren't doing, such as deep RL in the Rust programming language.

I had assumed that TensorFlow's support for close-to-the-hardware languages like Rust or C would be fairly advanced, as I had seen TensorFlow C or C++ code for deploying models to Android mobile devices. This turned out to be wrong: the C API is extremely minimal, meant only for deployment of pre-trained models, whereas I needed at least to train the model in the Rust context, while building the computation graph in Python was acceptable. I spent a month trying every which way I could to get it working, but was ultimately unsuccessful, in spite of generous help from `tensorflow-rust` author Adam Crume.

But then I turned to PyTorch which I had not paid much attention to until that point. PyTorch is far in advance of TensorFlow in its support for C and Rust. This is due to the `libtorch` library which contains most if not all of PyTorch's features (including Keras-style graph construction as well as training), whereas `libtensorflow`'s featureset is severely reduced.

If you'd like to play Umpire, head to https://github.com/joshhansen/Umpire
