import shell from 'shelljs';
import { writeFileSync } from 'fs';

console.log('Exporting library...');

// Supprimer et recréer le dossier temporaire
shell.rm('-rf', 'lib-build');
shell.mkdir('lib-build');

shell.cp('-R', 'dist/*', 'lib-build/');
shell.cp('-R', 'src/lib/components/Button.css', 'lib-build/');
shell.cp('-R', 'src/lib/components/Card.css', 'lib-build/');
shell.cp('-R', 'src/lib/components/Dropdown.css', 'lib-build/');
shell.cp('-R', 'src/lib/components/Timeline.css', 'lib-build/');
shell.cp('-R', 'src/lib/components/Carousel.css', 'lib-build/');
shell.cp('-R', 'src/lib/components/Loader.css', 'lib-build/');
shell.cp('-R', 'dist/*.css', 'lib-build/');

// Créer un fichier package.json dans lib-build
const packageJson = {
    name: "react-freelancers-components",
    version: "1.0.1",
    description: "Librairie de composants React",
    main: "my-react-lib.es.js",
    module: "my-react-lib.es.js",
    files: ["*.js", "*.css"],
    peerDependencies: {
        react: "^18.0.0",
        "react-dom": "^18.0.0"
    },
    keywords: ["react", "components", "ui"],
    author: "Mathis.bls",
    license: "MIT"
};

writeFileSync('lib-build/package.json', JSON.stringify(packageJson, null, 2));

console.log('Library successfully exported to lib-build/');
// Créer un fichier README.md dans lib-build
const readmeContent = `
# Freelancers Storybook

**Freelancers Storybook** est une librairie de composants React stylisés, conçue pour être utilisée dans des projets React. Elle propose des composants comme **Button**, **Card**, **Dropdown**, **Timeline**, **Carousel**, et **Loader**, avec une personnalisation avancée et des styles modernes.

---

## Installation

\`\`\`bash
npm install freelancers-storybook
\`\`\`

---

## Utilisation de Base

Importez les composants dans votre projet React :

\`\`\`javascript
import { Button, Card, Dropdown, Timeline, Carousel, Loader } from 'freelancers-storybook';
import 'freelancers-storybook/dist/style.css';
\`\`\`

---

## Composants Disponibles

### 1. **Button**

Un bouton personnalisable avec des options pour la couleur, le texte, le \`hover\`, et l'arrondi des coins.

#### Props

| Prop            | Type     | Description                                     | Par Défaut     |
|------------------|----------|-------------------------------------------------|----------------|
| \`label\`         | string   | Texte du bouton                                 | \`Button\`       |
| \`backgroundColor\` | string   | Couleur de fond                                | \`#6c63ff\`      |
| \`hoverColor\`    | string   | Couleur au survol                               | \`#4e4fcf\`      |
| \`textColor\`     | string   | Couleur du texte                                | \`#fff\`         |
| \`borderRadius\`  | string   | Arrondi des coins                               | \`8px\`          |
| \`onClick\`       | function | Fonction appelée lors du clic                   | \`null\`         |

#### Exemple

\`\`\`javascript
<Button
  label="Cliquez-moi"
  backgroundColor="#28a745"
  hoverColor="#218838"
  textColor="#fff"
  borderRadius="12px"
  onClick={() => alert('Bouton cliqué !')}
/>
\`\`\`

---

### 2. **Card**

Une carte stylisée avec une image, un titre, une description, et un bouton optionnel.

#### Props

| Prop            | Type     | Description                                     | Par Défaut     |
|------------------|----------|-------------------------------------------------|----------------|
| \`image\`         | string   | URL de l'image                                  | \`null\`         |
| \`title\`         | string   | Titre de la carte                               | \`Required\`     |
| \`description\`   | string   | Description de la carte                         | \`Required\`     |
| \`fullWidth\`     | boolean  | Si la carte doit occuper toute la largeur        | \`false\`        |
| \`borderRadius\`  | string   | Arrondi des coins                               | \`8px\`          |
| \`showButton\`    | boolean  | Affiche un bouton                               | \`false\`        |
| \`buttonLabel\`   | string   | Texte du bouton                                 | \`Voir Plus\`    |
| \`buttonAlign\`   | string   | Alignement du bouton (\`left\`, \`center\`, \`right\`) | \`left\`         |

#### Exemple

\`\`\`javascript
<Card
  image="https://via.placeholder.com/300x150"
  title="Carte Exemple"
  description="Ceci est une description."
  fullWidth={true}
  borderRadius="12px"
  showButton={true}
  buttonLabel="En savoir plus"
  buttonAlign="center"
/>
\`\`\`

---

### 3. **Dropdown**

Un menu déroulant simple et personnalisable.

#### Props

| Prop            | Type     | Description                                     | Par Défaut     |
|------------------|----------|-------------------------------------------------|----------------|
| \`options\`       | array    | Tableau des options (\`[{ label: 'Option 1', value: 'opt1' }]\`) | \`[]\`         |
| \`onSelect\`      | function | Fonction appelée lors de la sélection           | \`null\`         |
| \`hoverColor\`    | string   | Couleur au survol                               | \`#f0f0f0\`      |
| \`borderRadius\`  | string   | Arrondi des coins                               | \`8px\`          |

#### Exemple

\`\`\`javascript
<Dropdown
  options={[
    { label: 'Option 1', value: 'opt1' },
    { label: 'Option 2', value: 'opt2' },
  ]}
  onSelect={(value) => alert(\`Option sélectionnée : \${value}\`)}
  hoverColor="#e8e8e8"
  borderRadius="8px"
/>
\`\`\`

---

### 4. **Timeline**

Un composant timeline avec des étapes et un style vertical ou horizontal.

#### Props

| Prop            | Type     | Description                                     | Par Défaut     |
|------------------|----------|-------------------------------------------------|----------------|
| \`steps\`         | array    | Tableau des étapes (\`[{ label: 'Étape 1', completed: true }]\`) | \`[]\` |
| \`vertical\`      | boolean  | Si la timeline est verticale                    | \`true\`         |
| \`completedColor\`| string   | Couleur des étapes complétées                   | \`#6c63ff\`      |

#### Exemple

\`\`\`javascript
<Timeline
  steps={[
    { label: 'Étape 1', completed: true },
    { label: 'Étape 2', completed: false },
  ]}
  vertical={true}
  completedColor="#28a745"
/>
\`\`\`

---

### 5. **Carousel**

Un carousel d'images avec des options de navigation et d'autoplay.

#### Props

| Prop            | Type     | Description                                     | Par Défaut     |
|------------------|----------|-------------------------------------------------|----------------|
| \`items\`         | array    | Tableau des images (\`[{ src: 'url', alt: 'desc' }]\`) | \`[]\`      |
| \`showDots\`      | boolean  | Affiche des points de navigation                | \`true\`         |
| \`showArrows\`    | boolean  | Affiche des flèches de navigation               | \`true\`         |
| \`autoplay\`      | boolean  | Active le défilement automatique                | \`false\`        |
| \`visibleSlides\` | number   | Nombre de slides visibles                       | \`1\`            |

#### Exemple

\`\`\`javascript
<Carousel
  items={[
    { src: 'https://via.placeholder.com/800x400', alt: 'Slide 1' },
    { src: 'https://via.placeholder.com/800x400', alt: 'Slide 2' },
  ]}
  showDots={true}
  showArrows={true}
  autoplay={true}
  visibleSlides={1}
/>
\`\`\`

---

### 6. **Loader**

Un loader avec différentes animations.

#### Props

| Prop            | Type     | Description                                     | Par Défaut     |
|------------------|----------|-------------------------------------------------|----------------|
| \`animationType\` | string   | Type d'animation (\`spinner\`, \`pulse\`, \`dots\`, \`bars\`, \`ring\`) | \`spinner\` |
| \`loaderColor\`   | string   | Couleur de la partie active                     | \`#6c63ff\`      |
| \`backgroundColor\` | string | Couleur de la partie inactive                   | \`#e0e0e0\`      |
| \`size\`          | string   | Taille du loader                               | \`50px\`         |

#### Exemple

\`\`\`javascript
<Loader
  animationType="dots"
  loaderColor="#007bff"
  backgroundColor="#e0e0e0"
  size="60px"
/>
\`\`\`

---

## Contribution

Les contributions sont les bienvenues ! Ouvrez une issue ou un pull request pour suggérer des améliorations.

---

## License

Ce package est sous licence MIT. 😊
`;

writeFileSync('lib-build/README.md', readmeContent);

console.log('README.md mis à jour avec succès !');
