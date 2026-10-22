// Edite este arquivo antes de imprimir os cartões.
window.GAME = {
 school:'CEEP Áureo de Oliveira Filho', instagram:'@ceep__oficial', whatsapp:'5575988136641', durationMinutes:35,
 teams:[
  {id:'branca',name:'Branca',color:'#e8efff',accent:'#637793',method:'César +3',hint:'Para decifrar, volte três letras no alfabeto (D vira A).',route:['Biblioteca','Refeitório','Quadra','Pátio','Auditório','Sala de Silvana'],final:'TESOURO ENCONTRADO EQUIPE BRANCA'},
  {id:'azul',name:'Azul',color:'#367cff',accent:'#367cff',method:'Texto invertido',hint:'Leia toda a mensagem da direita para a esquerda.',route:['Refeitório','Quadra','Pátio','Auditório','Biblioteca','CVTT'],final:'TESOURO ENCONTRADO EQUIPE AZUL'},
  {id:'vermelha',name:'Vermelha',color:'#f04e61',accent:'#f04e61',method:'Atbash',hint:'Troque A por Z, B por Y, C por X e assim sucessivamente.',route:['Pátio','Auditório','Biblioteca','Refeitório','Quadra','Portaria de entrada dos alunos'],final:'TESOURO ENCONTRADO EQUIPE VERMELHA'},
  {id:'verde',name:'Verde',color:'#20bf8f',accent:'#20bf8f',method:'Base64',hint:'Use um decodificador Base64 para descobrir a mensagem.',route:['Auditório','Biblioteca','Refeitório','Quadra','Pátio','Sala 26'],final:'TESOURO ENCONTRADO EQUIPE VERDE'}
 ],
 riddles:{
  'Biblioteca':'ONDE LIVROS GUARDAM HISTORIAS E SABERES',
  'Refeitório':'ONDE A FOME CEDE LUGAR AS REFEICOES',
  'Quadra':'ONDE A BOLA ROLA E O ESPORTE ACONTECE',
  'Pátio':'ESPAÇO DE CONVIVENCIA NOS INTERVALOS',
  'Auditório':'ONDE APRESENTACOES REUNEM A COMUNIDADE',
  'Sala de Silvana':'PROCURE A SALA DE SILVANA QUE AJUDA A ORGANIZAR AS AULAS',
  'CVTT':'SIGA PARA O CVTT DA ESCOLA',
  'Portaria de entrada dos alunos':'ONDE OS ESTUDANTES ENTRAM NA ESCOLA',
  'Sala 26':'ENCONTRE A SALA DE NUMERO 26'
 }
};
window.GAME.clean = s=>String(s).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toUpperCase().trim().replace(/\s+/g,' ');
window.GAME.message = (t,n) => {
 if(n===5)return 'MENSAGEM FINAL: '+t.final+'. ENVIE ESTA FRASE PELO WHATSAPP PARA A ORGANIZACAO.';
 const dest=t.route[n+1];
 if(n===2)return 'REDE SOCIAL OFICIAL DA ESCOLA: @ceep__oficial. SENHA DESTA FASE: @ceep__oficial. SEU PROXIMO DESTINO: '+window.GAME.riddles[dest]+'.';
 return 'SEU PROXIMO DESTINO: '+window.GAME.riddles[dest]+'.';
};
window.GAME.answer = (t,n) => n===5?t.final:n===2?'@ceep__oficial':t.route[n+1];
window.GAME.encode = (t,msg) => {
 if(t.id==='azul')return [...msg].reverse().join('');
 if(t.id==='verde')return btoa(msg); // Todas as mensagens são ASCII.
 if(t.id==='vermelha')return msg.replace(/[A-Z]/g,ch=>String.fromCharCode(90-(ch.charCodeAt(0)-65)));
 return msg.replace(/[A-Z]/g,ch=>String.fromCharCode(65+(ch.charCodeAt(0)-65+3)%26));
};
