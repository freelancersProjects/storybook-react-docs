import shell from 'shelljs';
import { writeFileSync } from 'fs';

console.log('Exporting library...');

// Supprimer et recréer le dossier temporaire
shell.rm('-rf', 'lib-build');
shell.mkdir('lib-build');

shell.cp('-R', 'dist/*', 'lib-build/');
shell.cp('-R', 'src/lib/components/Button.css', 'lib-build/');
shell.cp('-R', 'dist/*.css', 'lib-build/');

// Créer un fichier package.json dans lib-build
const packageJson = {
    name: "freelancers-storybook",
    version: "1.0.0",
    description: "Librairie de composants React pour Freelancers",
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

Une librairie de composants React conçue pour les développeurs Freelancers.

## Installation

\`\`\`bash
npm install freelancers-storybook
\`\`\`
`;

writeFileSync('lib-build/README.md', readmeContent);

console.log('README.md successfully created in lib-build/');
