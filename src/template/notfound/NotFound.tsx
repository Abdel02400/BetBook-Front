import React from 'react';

const NotFound: React.FunctionComponent = () => (
  <div className="error-page">
    <div className="error-page__content">
      <h1>404</h1>
      <h4>Oups ! Page non trouvé</h4>
      <p>Désolé, la page que vous visitez n&#39;existe pas. Si vous pensez que le site ne fonctionne pas, faite nous un retour.</p>
      <div className="error-page__buttons">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#">retour a la page d&#39;accueil</a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#">signalez un prbolème</a>
      </div>
    </div>
  </div>
);

export default NotFound;
