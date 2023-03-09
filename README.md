# Projet

Créer un site avec ReactJS, ExpressJS et MongoDB pour la base de données.
Le site doit avoir une Navbar responsive pour naviguer entre les page.
Et un footer a la fin de chaques pages

Le site aura une page d'acceuil qui affichera tous les articles des utilisateurs.

Un utilisteur peut s'authentifier (Inscription puis connexion), et de manière persistante en utilisant les JWT token. Dans la base de données un utilisateur consiste:

- id, password, email, username, avatar

Le site aura une page de profil pour chaque utilisateur, ou:

- Les données de l'utilisateur seront affichées.
- L'utilisateur peut modifier ses informations.
- Afficher tous les articles de l'utilisateur.

L'utilisateur peut créer des articles, un article consiste en:

- id, title, content, image.
---
## initialisation du projet sur git:

1. initialiser le github sur git
    - initialisation sur l'ordinateur avec git init
2. création de la branche main 
```bash
    - git branch -M main
```
3. création du README.md
4. premier push
```bash
    git add README.md
    git commit -m "first commit"
```
        git remote add origin https://github.com/Yutux/finalproject.git
        git push -u origin main
```

---
## initialisation du back-end :

1. installation 
    - initialisation de package.json
    ```bash
        - yarn init
    ```
    - installation des librairies
        - nodemon
        ```bash
             yarn add --dev nodemon
        ```
        - express
        ```bash
            yarn add express
        ```
        - morgan
        ```bash
            yarn add --dev morgan
        ```
        - jsonwebtoken
        ```bash
            yarn add jsonwebtoken
        ```
    


 