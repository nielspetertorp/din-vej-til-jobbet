export type Hotspot = { id:string; title:string; text:string; questions?:string[]; firstStep?:string; cta?:string };
export const hotspots: Hotspot[] = [
{id:'start',title:'Du er her',text:'Her starter du. Måske er du i job, ledig, nyuddannet, erfaren eller midt i et brancheskifte. Det vigtigste er næste kloge skridt.',questions:['Hvad vil du gerne væk fra?','Hvad vil du tættere på?','Ved du hvilken type job du ønsker?','Ved du hvilke kompetencer der kræves?'],cta:'Tag afklaringsguiden'},
{id:'dream',title:'Dit drømmejob',text:'Dit drømmejob kan være en stilling, virksomhed, branche eller en retning, du endnu ikke helt kan sætte ord på.',questions:['Er målet en stillingstype?','En virksomhed?','En branche?','Eller en mere åben retning?']},
{id:'role',title:'Stillingstype',text:'Undersøg konkrete jobopslag. Hvilke opgaver går igen? Hvilke kompetencer efterspørges?',firstStep:'Find 5 jobopslag, marker krav, og vurder hvad du matcher.'},
{id:'company',title:'Virksomhed',text:'Målet kan være at komme ind i en bestemt virksomhed. Vejen ind kan være indirekte via en anden rolle.',firstStep:'Undersøg roller, find lignende profiler, og overvej realistiske indgange.'},
{id:'skills',title:'Ønskede kompetencer',text:'Kompetencer er broen mellem nuværende udgangspunkt og mål. Undersøg faktiske krav før du vælger kursus.',firstStep:'Lav en match/mangel-liste ud fra jobopslag og samtaler.'},
{id:'A',title:'Strategi A: Den direkte vej',text:'Du går direkte efter stillingen, virksomheden eller rollen. Passer når mål og match er tydelige.',firstStep:'Find 5 opslag, tilpas CV/ansøgning, søg og lær af feedback.',cta:'Tag guiden og se om A passer til dig'},
{id:'B',title:'Strategi B: Trædestensvejen',text:'Du bygger bro gennem mindre skridt som erfaring, netværk eller kompetenceopbygning.',firstStep:'Vælg ét hul og én trædesten som lukker det.',cta:'Tag guiden og se om B passer til dig'},
{id:'C',title:'Strategi C: Ny retning-vejen',text:'Du tager en længere vej gennem ny uddannelse eller større opkvalificering.',firstStep:'Bekræft uddannelsesbehov, tal med feltet, sammenlign muligheder.',cta:'Tag guiden og se om C passer til dig'}
];
export const steppingStones = ['Kursus/certificering','Praktik','Projekt/frivilligt arbejde','Midlertidigt job','Netværk/kaffemøder','Internt job'];
export const examples=[
{title:'Nyuddannet med uklar retning',text:'Undersøg jobopslag, tal med folk i roller og afklar kompetencer.',way:'Afklaring før strategi — måske senere A eller B.'},
{title:'Du mangler kompetencer til ønsket rolle',text:'Du kender målet, men mangler krav i opslag.',way:'Strategi B — eventuelt kombineret med A.'},
{title:'Erfaren med brancheskifte',text:'Oversæt erfaring til ny kontekst via netværk/projekter/midlertidige roller.',way:'Strategi B — eventuelt før A eller C.'}
]
