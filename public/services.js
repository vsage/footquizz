NeymarEstCher.constant('questions', {
    questions: [
      {
        question: "Oh putain, la passe appuyée. Ça sent la sortie en touche…",
        answers: [
          {answer: "Ton deuxième prénom c'est Eymeric, et ton premier c'est Pierre, tu récupères la balle et tu as même le temps de t'allumer une clope.",
          level: "a"},
          {answer: "Y'a moyen que ça le fasse mais tu peux le regretter par la suite.",
          level: "b"},
          {answer: "Joueur de devoir, tu y vas mais tu ne te fais guère d’espoirs.",
          level: "c"},
          {answer: "Quand on veut, on peut. Merde, tu t’es un peu surestimé, tu trébuches.",
          level: "d"},
          {answer: "Tu n’esquisses pas le moindre mouvement et te tournes vers ton coéquipier, prêt à insulter ses grands morts.",
          level: "e"}
        ],
        category: "Physique"
      },
      {
        question: "Tu te retrouves face au dernier défenseur de l’équipe adverse, il est temps de lâcher ton meilleur dribble.",
        answers: [
          {answer: "Tu as grandi ballon au pied entre favelas et terrains vagues. Pas besoin de réfléchir, tu laisses parler ton instinct.",
          level: "a"},
          {answer: "Tu te raccroches au seul dribble que tu maîtrises. Pas de folie, petite feinte de corps et crochet de l’autre côté.",
          level: "b"},
          {answer: "Pas de fantaisie, tu pousses ton ballon et commences à sortir le coude pour intimider ton vis-à-vis.",
          level: "c"},
          {answer: "C’était quoi ce dribble vu sur une vidéo YouTube « skills and goals » hier déjà? Tu envoies ce fameux double contact mais te rends vite compte que c’est un peu trop osé.",
          level: "d"},
          {answer: "Toi face au dernier défenseur? Pas le temps de mouiller ton caleçon, l’émotion est trop forte, tu te réveilles.",
          level: "e"}
        ],
        category: "Technique"
      },
      {
        question: "Comment les défenseurs adverses ont-ils pu jouer le hors-jeu là-dessus ? Tu te retrouves seul à l'entrée de la surface et si l'ouverture vient de loin, elle paraît millimétrée...",
        answers: [
          {answer: "Photo de Neymar qui contrôle.",
          level: "a"},
          {answer: "Tu ouvres le pied façon Zizou pour caresser le cuir et t'emmener le ballon sereinement.",
          level: "b"},
          {answer: "Tu as déjà réussi des contrôles plus difficiles à l’entraînement alors on y croit. Tu as beau te concentrer, la balle rebondit sur ton tibia et file un peu loin. Peut-être trop loin mais tu te jettes pour tenter le pointard.",
          level: "c"},
          {answer: "Meeeeeerde, désolé les gars… En prenant soin de ne croiser le regard de personne, tu retournes à ton poste tête basse. ",
          level: "d"},
          {answer: "Pour masquer ton incapacité absolue à contrôler un ballon correctement, tu tentes la reprise acrobatique. Moins honteux si tu te foires. Mais qu'est-ce qui t'a pris de te retrouver en si bonne position bon sang !",
          level: "e"}
        ],
        category: "Technique"
      }
    ]
})
.factory('convert', ['$window', function($window) {
  var score = {"Physique": 0, "Technique": 0, "Vision": 0, "Defense": 0};
  return function(answer) {
      var points = 0;
      switch (answer) {
        case "a":
           points = 40;
          break;
        case "b":
           points = 30;
          break;
        case "c":
           points = 20;
          break;
        case "d":
           points = 10;
          break;
        case "e":
           points = 0;
          break;
        default:
      }
    return points;
  }
}])
.factory('score', ['$window', 'convert', function($window, convert) {
   var score = {"Physique": 0, "Technique": 0, "Vision": 0, "Defense": 0};
   var previousAnswers = [];
   return {
     scoreUpdate: function(points, category) {
       score[category] += points;
     },
     pushScore: function(points, id, category){
       previousAnswers[id] = {points: points, category: category}
     },
     previousScoreExists: function(id){
       var returnValue = undefined;
       if (previousAnswers[id]) {
         returnValue = previousAnswers[id]
         previousAnswers[id] = undefined
       }
       return returnValue;
     },
     currentScore: function(){
       return score;
     }
   }
 }])
