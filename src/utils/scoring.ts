export type GuideAnswerMap = Record<string,string>;
export type ResultKey='A'|'B'|'C'|'A+B'|'BførA'|'BførC'|'Afklaring';
export function computeResult(answers: GuideAnswerMap){
  let scoreA=0,scoreB=0,scoreC=0,scoreAfklaring=0;
  const add=(id:string,val:string)=>{
    if(id==='q1'){if(val.includes('stillingstype'))scoreA+=2; if(val.includes('virksomhed')||val.includes('branche'))scoreB+=2; if(val.includes('ny retning'))scoreC+=2; if(val.includes('ikke helt'))scoreAfklaring+=2;}
    if(id==='q2'){if(val.includes('Meget tydeligt'))scoreA+=2; if(val.includes('Nogenlunde'))scoreB+=2; if(val.includes('uklart'))scoreAfklaring+=2;}
    if(id==='q3'){if(val.startsWith('Ja'))scoreA+=2; if(val==='Delvist')scoreB+=1; if(val.startsWith('Nej'))scoreAfklaring+=2;}
    if(id==='q4'){if(val.includes('de fleste'))scoreA+=2; if(val.includes('nogle'))scoreB+=2; if(val.includes('flere'))scoreC+=2; if(val.includes('ved det ikke'))scoreAfklaring+=2;}
    if(id==='q5'){if(val.includes('direkte'))scoreA+=2; if(val.includes('overføres'))scoreB+=2; if(val==='Meget lidt'||val==='Nej')scoreC+=2;}
    if(id==='q6'){if(val.includes('Lille'))scoreA+=2; if(val.includes('Brancheskifte'))scoreB+=2; if(val.includes('Helt ny'))scoreC+=2;}
    if(id==='q7'){if(val.includes('Ingenting'))scoreA+=2; if(['Konkrete kompetencer','Erfaring','Netværk eller adgang'].includes(val))scoreB+=2; if(val.includes('Formel'))scoreC+=2; if(val.includes('Mere viden'))scoreAfklaring+=2;}
    if(id==='q8'){if(val==='Nu')scoreA+=2; if(val.includes('få måneder')||val.includes('næste år'))scoreB+=1; if(val.includes('længere'))scoreC+=2;}
    if(id==='q9'){if(val==='Ja')scoreB+=2; if(val==='Måske')scoreB+=1;}
    if(id==='q10'){if(val==='Ja')scoreC+=2; if(val==='Måske')scoreB+=1; if(val==='Jeg ved det ikke')scoreAfklaring+=1;}
    if(id==='q11'){if(val.startsWith('Jeg har set konkrete'))scoreA+=2; if(val.startsWith('Jeg har set lidt'))scoreB+=1; if(val.includes('idé')||val.includes('ikke undersøgt'))scoreAfklaring+=2;}
    if(id==='q12'){if(val.includes('søge'))scoreA+=2; if(val.includes('styrke')||val.includes('erfaring'))scoreB+=2; if(val.includes('uddannelse'))scoreC+=2; if(val.includes('afklare'))scoreAfklaring+=2;}
  }
  Object.entries(answers).forEach(([id,val])=>add(id,val));
  const top: Array<[ResultKey, number]> = [
  ['A', scoreA],
  ['B', scoreB],
  ['C', scoreC],
];

top.sort((a, b) => b[1] - a[1]);
  let key:ResultKey=top[0][0] as ResultKey;
  if(scoreAfklaring>=4 && ['Lidt uklart','Meget uklart'].includes(answers.q2||'')) key='Afklaring';
  else if(Math.abs(scoreA-scoreB)<=2 && scoreA>=scoreC && scoreB>=scoreC) key='A+B';
  else if(scoreB>=scoreA && Math.abs(scoreB-scoreA)<=2 && scoreB>scoreC) key='BførA';
  else if(Math.abs(scoreB-scoreC)<=2 && scoreB>=scoreA) key='BførC';
  return {key, scoreA, scoreB, scoreC, scoreAfklaring};
}
