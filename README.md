# Enhancing Retirement Security: AI-Driven Fraud Detection, Consultancy, and Investment Optimization

## Overview
Welcome to the GitHub repository for the project "Enhancing Retirement Security." This project focuses on leveraging artificial intelligence to provide solutions for investment prediction, fraud detection in SMS messages, and job recommendations for retired personnel. The system comprises three main components: Investment Prediction Classifier, Fraud Detection System, and Job Recommendation System.

## Investment Prediction Classifier
The investment prediction model utilizes a Random Forest Classifier, an ensemble learning algorithm that combines multiple decision trees for robust predictions. The model is trained on a dataset loaded from 'input.csv' and undergoes preprocessing, including encoding categorical variables using LabelEncoder. Key features, such as Gender and Domain Of Expertise, are one-hot encoded for effective training.

The model is trained with default parameters and 100 trees, using an 80% training and 20% testing split. After fitting, predictions are generated and evaluated for accuracy using the test set. The trained model is saved to 'investment_model1.pkl' for future use. Considerations for hyperparameter tuning and feature importance analysis are provided for potential enhancements.

## Fraud Detection System
The Fraud Detection System employs a text classification model to identify fraudulent messages. The model is trained on a dataset loaded from 'fraud.csv' using TF-IDF vectorization and a Naive Bayes classifier (MultinomialNB). The system is evaluated on a test set, and accuracy along with a classification report is printed. The README includes an example of using the LIME framework for explaining model predictions on individual instances, enhancing interpretability for end-users.

## Job Recommendation System
The Job Recommendation System is a Flask web application designed to match job seekers with relevant job titles based on their resumes. The application utilizes libraries such as Flask for web development, NLTK for natural language processing, and scikit-learn for text analysis. Users upload resumes in PDF format, processed using the pdfminer library to extract text. NLTK extracts keywords from the resumes, and a CountVectorizer converts job descriptions' key skills into vectors. Cosine similarity is employed to find the top matching job titles, and results are displayed on a user-friendly web interface.

## Technologies Used
- TypeScript
- HTML
- CSS
- Python (Flask)
- JavaScript

## Installation and Usage
1. Clone the repository.
2. Navigate to the respective directories for each system (`Investment_Prediction`, `Fraud_Detection`, `Job_Recommendation`).
3. Follow the specific README instructions in each directory for installation and usage details.

