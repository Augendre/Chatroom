// ! Un middleware se place en entrée du store et intercepte toutes les actions avant 
// ! qu'elles arrivenrt au store => on peut logguer, envoyer une requête vers une API ...

// ! triple fléchée : une fonction qui retourne une fonction qui retourne une fonction
// C'est un peu comme si on avait 3 arguments
// * "state" : accès au store (lecture et dispatch)
// * "next" : permet de passer l'accès à son voisin
// * "action" : action interceptée
const logMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans logMiddleware: ', action);
  switch (action.type) {
    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      // si on n'appelle pas "next(action)" l'action n'arrivera pas jusqu'au store
      // ! next(action) à mettre obligatoirement et une seule fois
      next(action);
  }
};
export default logMiddleware;
