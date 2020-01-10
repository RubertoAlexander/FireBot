# Firebot

Chatbot and data visualisation built for Sheda's technical code test. This chatbot is designed as a government organisation tool to aid people seeking information about the bushfire crisis in Australia.

## Technology Stack
Firebot was built in React.js following the guidelines of the [botonic](https://docs.botonic.io/) framework. 

Data visualisation of rainfall in Australia was developed in Python using [Matplotlib](https://matplotlib.org/) and [Pandas](https://pandas.pydata.org/)

#### Testing
Unfortunately there is a known issue within the botonic framework which restricts the testing of the components in Jest due to deprecated code, however thorough user acceptance testing was completed.

## Installation
Download repository and install modules using:

```bash
npm install
```
and run using:
```bash
npm run start
```
To deploy onto a messaging or web platform, use the commands
```bash
botonic deploy
```

## Usage
When talking to the chatbot you may ask it anything you like, however try saying "Hi" or "What do you do?"
Please note: the information about the fire crisis in Australia is not up to date and the distances to the closest fire may be innaccurate.

To add more vocabulary for the chatbot to recognise more words, add to the utterance files and type in the command:

```bash
botonic train
```
