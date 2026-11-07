const _$m0_b25=(()=>{const _$p=Uint8Array.from([248,229,153,175,218,86,7,18,77,27,59,170,100,217,240,83,228,120,14,194,170,180,21,166,0,230,234,53]),_$o=[0,12,13,13,20],_$l=[12,1,0,7,8],_$c=new Map(),_$td=new TextDecoder();
function _$sb25(k){if(_$c.has(k))return _$c.get(k);const s=_$o[k],n=_$l[k],u=new Uint8Array(n);let q=722254629;if((Math.imul(q|1,q|1)&7)!==1)return'';for(let i=0;i<s+n;i++){q=(q+0x9e3779b9)>>>0;if(i>=s){let z=q;z=Math.imul(z^(z>>>16),0x85ebca6b)>>>0;z=Math.imul(z^(z>>>13),0xc2b2ae35)>>>0;z=(z^(z>>>16))>>>0;u[i-s]=_$p[i]^(z&255)^((i*17)&255);}}const v=_$td.decode(u);_$c.set(k,v);return v;}
function estimateCouncil(kernel, question, seats){
const _0xbb250= kernel.call(_$sb25(0),{
start:{
question,
seats: Array.from({ length: Math.max(seats, (0x1466c6d1^0x1466c6d3))},()=>({ model: _$sb25(1), title: _$sb25(2), fallbacks:[]})),
chair:{ model: _$sb25(1), fallbacks:[]},
options:[],
limits:{}
}
});
return _0xbb250.state.worst_case;
}
async function _0x00fe1(call, transport, o){
const _0x46d72=[call.model,...(call.fallbacks||[])];
let last= _$sb25(2);
for(let _0x8cb03= 0; _0x8cb03< _0x46d72.length; _0x8cb03++){
if(o.signal?.aborted) return{ id: call.id, error: _$sb25(3)};
try{
const _0xd2894= await transport(_0x46d72[_0x8cb03], call, o.signal);
o.onUsage?.(_0x46d72[_0x8cb03], _0xd2894.input, _0xd2894.output, call.kind);
return{ id: call.id, text: _0xd2894.text, model: _0x46d72[_0x8cb03], in: _0xd2894.input, out: _0xd2894.output};
} catch(err){
last= String(err?.message|| err);
if(_0x8cb03+ 1< _0x46d72.length){
o.onEvent?.({ type: _$sb25(4), seat: call.seat, from: _0x46d72[_0x8cb03], to: _0x46d72[_0x8cb03+ 1], reason: last.slice(0, (0x11e6f887^0x11e6f8ff))});
}
}
}
return{ id: call.id, error: last};
}
async function runCouncil(kernel, transport, o){
let _0x18625= kernel.call(_$sb25(0),{
start:{
question: o.question,
seats: o.seats.map((s, _0x8cb03)=>({ model: s.model, title: s.title, lens: _0x8cb03, fallbacks: s.fallbacks||[]})),
chair:{ model: o.chair.model, fallbacks: o.chair.fallbacks||[]},
options: o.options||[],
limits: o.limits||{}
}
});
if(_0x18625.error) throw new Error(_0x18625.error);
while(true){
for(const _0x5e3b6 of _0x18625.events||[]) o.onEvent?.(_0x5e3b6);
if(_0x18625.done) return _0x18625.result;
if(o.signal?.aborted) throw new Error(_$sb25(3));
const results= await Promise.all(_0x18625.calls.map((c)=> _0x00fe1(c, transport, o)));
_0x18625= kernel.call(_$sb25(0),{ state: _0x18625.state, results});
}
}
return{estimateCouncil,runCouncil};})();
const _$m1_868=(()=>{const _$p=Uint8Array.from([127,119,253,71,38,98,58,167,51,48,197,113,100,30,244,234,124,102,26,109,129,241,243,180,194,201,190,162,154,196,79,71,216,19,5,248,59,200,58,237,234,224,35,53,67,76,129,28,65,62,168,26,55,244,252,175,9,189,221,167,179,41,23,42,169,102,108,138,108,161,7,145,233,87,212,158,81,143,64,251,33,45,12,250,223,159,13,206,17,214,197,186,66,138,9,70,90,90,30,177,9,13,84,137,240,140,11,43,108,137,210,245,29,118,204,252,105,196,68,241,60,198,146,9,40,250,126,129,219,215,228,147,47,207,20,168,215,137,106,137,124,51,118,67,104,108,183,238,79,49,127,196,78,39,246,104,226,38,21,78,55,13,26,240,86,211,127,123,63,47,177,165,251,54,114,94,35,100,78,166,188,252,118,211,130,249,129,234,215,43,215,61,153,149,209,49,58,198,97,224,214,90,45,222,174,0,13,22,109,22,236,195,59,57,114,44,220,54,83,206,179,12,154,31,246,31,82,209,199,9,163,105,208,31,140,184,171,91,185,66,125,110,40,46,178,0,174,141,75,131,122,205,57,255,56,63,185,233,49,222,69,41,169,231,37,39,70,125,7,206,177,217,23,163,58,195,203,199,151,87,48,214,69,27,86,146,30,249,148,153,222,204,239,174,201,238,134,237,135,120,52,59,93,160,40,1,44,125,106,102,111,92,196,111,156,127,237,128,129,101,82,188,125,15,120,14,202,45,17,190,236,251,122,123,186,172,122,77,69,136,148,170,84,111,118,36,246,47,144,135,73,4,197,234,215,176,57,157,176,145,177,223,156,108,23,123,99,129,227,194,37,176,26,113,182,226,60,21,45,25,120,251,113,38,57,30,66,148,168,98,41,86,29,149,1,39,125,81,78,172,174,160,43,106,217,52,97,158,213,180,162,181,80,241,185,83,106,60,166,212,215,191,87,226,59,158,79,157,130,58,23,171,135,153,20,173,162,125,142,145,46,248,134,16,159,10,57,66,173,140,120,59,48,65,200,129,231,115,129,4,202,165,56,78,244,166,191,201,191,117,161,249,17,78,198,104,45,76,134,92,75,127,160,94,99,224,150,212,134,46,82,58,47,15,129,132,53,195,76,119,112,40,181,251,47,36,75,43,168,116,35,66,106,111,96,146,31,50,139,204,24,198,2,120,69,44,46,69,48,182,109,129,129,48,222,175,179,192,70,115,17,47,84,239,174,201,159,5,100,16,207,147,106,197,13,30,244,58,64,107,166,197,132,237,105,143,191,189,101,190,233,163,225,75,130,156,6,124,31,129,228,125,37,105,129,87,139,90,205,41,94,71,127,53,78,43,161,50,66,162,62,79,155,129,74,195,128,216,116,196,211,4,18,23,185,206,69,48,230,18,181,234,147,156,138,206,21,188,12,124,25,218,158,67,95,39,106,42,121,39,138,68,91,195,236,91,8,134,163,69,206,241,24,173,79,93,255,202,125,106,101,200,211,191,47,153,155,4,130,63,181,231,227,61,204,112,72,21,163,45,12,49,26,130,77,99,33,220,229,170,93,146,124,4,84,50,197,40,192,169,165,121,137,197,135,76,238,238,141,141,246,146,39,215,187,39,183,125,186,66,166,131,146,13,231,121,172,227,16,215,78,112,131,242,134,147,211,182,79,18,39,17,248,254,151,223,230,20,133,129,135,192,22,237,81,150,200,136,217,8,224,117,98,59,61,120,141,11,241,148,227,97,89,12,111,188,64,123,79,188,30,226,96,182,192,26,144,3,102,17,150,167,127,150,79,232,41,173,194,249,127,210,159,212,194,129,207,198,105,229,215,84,30,149,210,150,81,28,48,145,172,161,152,51,2,233,90,10,156,122,191,198,231,241,188,12,161,35,44,195,100,74,217,20,9,106,78,60,201,155,224,182,177,156,3,210,191,223,234,153,210,107,155,17,165,164,24,181,164,164,3,3,22,210,124,104,206,84,43,96,157,179,65,227,151,23,207,45,2,43,203,25,70,130,104,51,80,233,74,82]),_$o=[0,25,39,67,85,115,127,154,170,171,171,177,186,192,198,201,209,210,214,230,244,250,252,277,333,349,353,378,385,386,393,410,416,425,445,475,492,548,551,562,569,600,604,622,624,639,643,658,665,689,713,732,739,746,750,754,759,779,784,785,787,802,824,827,831,848,872,889],_$l=[25,14,28,18,30,12,27,16,1,0,6,9,6,6,3,8,1,4,16,14,6,2,25,56,16,4,25,7,1,7,17,6,9,20,30,17,56,3,11,7,31,4,18,2,15,4,15,7,24,24,19,7,7,4,4,5,20,5,1,2,15,22,3,4,17,24,17,11],_$c=new Map(),_$td=new TextDecoder();
function _$s868(k){if(_$c.has(k))return _$c.get(k);const s=_$o[k],n=_$l[k],u=new Uint8Array(n);let q=1353119848;if((Math.imul(q|1,q|1)&7)!==1)return'';for(let i=0;i<s+n;i++){q=(q+0x9e3779b9)>>>0;if(i>=s){let z=q;z=Math.imul(z^(z>>>16),0x85ebca6b)>>>0;z=Math.imul(z^(z>>>13),0xc2b2ae35)>>>0;z=(z^(z>>>16))>>>0;u[i-s]=_$p[i]^(z&255)^((i*17)&255);}}const v=_$td.decode(u);_$c.set(k,v);return v;}
class ProviderError extends Error{}
const _0xf8680={
openai:{ base_url: _$s868(0), api_key_env: _$s868(1)},
openrouter:{ base_url: _$s868(2), api_key_env: _$s868(3)},
groq:{ base_url: _$s868(4), api_key_env: _$s868(5)},
deepseek:{ base_url: _$s868(6), api_key_env: _$s868(7)}
};
function parseModel(spec, cfg={}){
const _0x3e411= spec.indexOf(_$s868(8));
const _0x841a2= _0x3e411> 0? spec.slice(0, _0x3e411): _$s868(9);
if([_$s868(10), _$s868(11), _$s868(12), _$s868(13), _$s868(14), _$s868(15),...Object.keys(_0xf8680),...Object.keys(cfg.providers||{})].includes(_0x841a2)){
return{ backend: _0x841a2, model: spec.slice(_0x3e411+ 1)};
}
if(spec.startsWith(_$s868(10))) return{ backend: _$s868(10), model: spec};
if(spec.includes(_$s868(16))) return{ backend: _$s868(14), model: spec};
return{ backend: _$s868(13), model: spec};
}
function isLocalModel(spec, cfg={}){
const{ backend}= parseModel(spec, cfg);
return backend=== _$s868(13)|| backend=== _$s868(14)|| backend=== _$s868(15)||!!cfg.providers?.[backend]?.local;
}
function _0xc9f33(text){
return text.replace(/<think>[\s\S]*?<\/think>\s*/g, _$s868(9));
}
async function _0x0fcc4(_0xe1577, headers, body, label, signal){
let res;
try{
res= await fetch(_0xe1577,{ method: _$s868(17), headers:{ 'Content-Type': _$s868(18),...headers}, body: JSON.stringify(body), signal});
} catch(_0x9bd1h){
throw new ProviderError(label+ _$s868(19)+(_0x9bd1h?.message|| _0x9bd1h));
}
if(!res.ok){
const _0x55a55=(await res.text()).slice(0, (0x340c0020^0x340c010c));
throw new ProviderError(label+ _$s868(20)+ res.status+ _$s868(21)+ _0x55a55);
}
return res.json();
}
async function _0x9b7e6(model, c, cfg, signal){
const key= cfg.env?.GEMINI_API_KEY;
if(!key) throw new ProviderError(_$s868(22));
const _0xe1577= _$s868(23)+ encodeURIComponent(model)+ _$s868(24);
const body={
systemInstruction:{ parts:[{ text: c.system}]},
contents:[{ role: _$s868(25), parts:[{ text: c.prompt}]}],
generationConfig:{ maxOutputTokens: Math.max(c.max_tokens* (0x2290bd95^0x2290bd96), (0x266ce938^0x266ced38))}
};
const data= await _0x0fcc4(_0xe1577,{ 'x-goog-api-key': key}, body, _$s868(10), signal);
const text=(data.candidates?.[0]?.content?.parts||[]).map((_0xb335l)=> _0xb335l.text|| _$s868(9)).join(_$s868(9));
if(!text) throw new ProviderError(_$s868(26)+(data.candidates?.[0]?.finishReason|| data.promptFeedback?.blockReason|| _$s868(27))+ _$s868(28));
const _0x27308= data.usageMetadata||{};
return{ text, input: _0x27308.promptTokenCount|| 0, output:(_0x27308.candidatesTokenCount|| 0)+(_0x27308.thoughtsTokenCount|| 0)};
}
async function _0x6d099(label, base, key, model, c, local, signal){
const headers= key?{ Authorization: _$s868(29)+ key}:{};
const data= await _0x0fcc4(base.replace(/\/$/, _$s868(9))+ _$s868(30), headers,{
model,
messages:[{ role: _$s868(31), content: c.system},{ role: _$s868(25), content: c.prompt}],
max_tokens: local? Math.max(c.max_tokens* (0x2e1f0919^0x2e1f091a), (0x334321d4^0x334325d4)): c.max_tokens
}, label, signal);
const _0x27308= data.usage||{};
return{ text: data.choices?.[0]?.message?.content|| _$s868(9), input: _0x27308.prompt_tokens|| 0, output: _0x27308.completion_tokens|| 0};
}
async function _0xb2e2a(_0x2783j){
let _0xf8bbb=[];
try{
const res= await fetch(_0x2783j+ _$s868(32));
_0xf8bbb=((await res.json()).models||[]).map((m)=> m.name);
} catch(_0x9bd1h){
throw new ProviderError(_$s868(33)+(_0x9bd1h?.message|| _0x9bd1h));
}
if(!_0xf8bbb.length) throw new ProviderError(_$s868(34));
return _0xf8bbb[0];
}
async function _0x3e94c(model, c, signal){
let mod;
try{
mod= await import(_$s868(35));
} catch{
throw new ProviderError(_$s868(36));
}
const _0x846dd= new mod.default();
let msg;
try{
msg= await _0x846dd.messages.create({
model,
max_tokens: Math.max(c.max_tokens* (0x677fa1d^0x677fa1e), (0x1c947420^0x1c947020)),
system: c.system,
messages:[{ role: _$s868(25), content: c.prompt}],
output_config:{ effort: _$s868(37)}
},{ signal});
} catch(_0x9bd1h){
throw new ProviderError(_$s868(38)+(_0x9bd1h?.message|| _0x9bd1h));
}
if(msg.stop_reason=== _$s868(39)) throw new ProviderError(_$s868(40));
const _0x27308= msg.usage;
return{
text: msg.content.filter((b)=> b.type=== _$s868(41)).map((b)=> b.text).join(_$s868(9)),
input: _0x27308.input_tokens+(_0x27308.cache_read_input_tokens|| 0)+(_0x27308.cache_creation_input_tokens|| 0),
output: _0x27308.output_tokens
};
}
async function _0xca46e(model, c, cfg, signal){
const{ spawn}= await import(_$s868(42));
const args=[_$s868(43), _$s868(44), _$s868(45), _$s868(46), c.system, _$s868(47), _$s868(9), _$s868(48), _$s868(49), _$s868(50)];
if(model&& model!== _$s868(51)) args.push(_$s868(52), model);
return new Promise((resolve, reject)=>{
const _0x101ff= spawn(cfg.claudeBinary|| _$s868(12), args,{ stdio:[_$s868(53), _$s868(53), _$s868(53)], signal});
let _0x55f8g= _$s868(9);
let _0x9bd1h= _$s868(9);
_0x101ff.stdout.on(_$s868(54),(d)=>(_0x55f8g+= d));
_0x101ff.stderr.on(_$s868(54),(d)=>(_0x9bd1h+= d));
_0x101ff.on(_$s868(55),(e)=> reject(new ProviderError(_$s868(56)+ e.message)));
_0x101ff.on(_$s868(57),()=>{
let data={};
try{
data= JSON.parse(_0x55f8g.trim().split(_$s868(58)).pop()|| _$s868(59));
} catch{}
if(!data.result|| data.is_error) return reject(new ProviderError(_$s868(60)+ String(data.result|| _0x9bd1h|| _0x55f8g).slice(0, (0x1e8f92ae^0x1e8f9382))));
const _0x27308= data.usage||{};
resolve({
text: data.result,
input:(_0x27308.input_tokens|| 0)+(_0x27308.cache_creation_input_tokens|| 0)+(_0x27308.cache_read_input_tokens|| 0),
output: _0x27308.output_tokens|| 0
});
});
_0x101ff.stdin.end(c.prompt);
});
}
function makeTransport(cfg={}){
return async(spec, call, signal)=>{
const{ backend, model}= parseModel(spec, cfg);
const local= isLocalModel(spec, cfg);
let c= call;
if(!local&& cfg.scrub){
const _0xe1aai= cfg.scrub(call.prompt);
if(_0xe1aai.removed) cfg.onScrub?.(_0xe1aai.removed);
c={...call, prompt: _0xe1aai.text};
}
let r;
if(backend=== _$s868(10)){
r= await _0x9b7e6(model, c, cfg, signal);
} else if(backend=== _$s868(11)){
r= await _0x3e94c(model, c, signal);
} else if(backend=== _$s868(12)){
r= await _0xca46e(model, c, cfg, signal);
} else if(backend=== _$s868(13)){
const _0x2783j= cfg.ollamaHost|| _$s868(61);
r= await _0x6d099(_$s868(13), _0x2783j+ _$s868(62), _$s868(9), model=== _$s868(63)? await _0xb2e2a(_0x2783j): model, c, true, signal);
} else if(backend=== _$s868(14)){
let last;
r= null;
for(const _0x6d5ck of cfg.mlxPorts||[(0x1e10e52c^0x1e10fabc), (0x32d1777e^0x32d168e6)]){
try{
r= await _0x6d099(_$s868(14), _$s868(64)+ _0x6d5ck+ _$s868(62), _$s868(9), model, c, true, signal);
break;
} catch(e){
last= e;
}
}
if(!r) throw last;
} else if(backend=== _$s868(15)){
r= await _0x6d099(_$s868(15), _$s868(65), _$s868(9), model, c, true, signal);
} else{
const _0xb335l= cfg.providers?.[backend]|| _0xf8680[backend];
if(!_0xb335l) throw new ProviderError(_$s868(66)+ backend);
const key= _0xb335l.api_key_env? cfg.env?.[_0xb335l.api_key_env]|| '': _$s868(9);
if(_0xb335l.api_key_env&&!key) throw new ProviderError(_0xb335l.api_key_env+ _$s868(67));
r= await _0x6d099(backend, _0xb335l.base_url, key, model, c,!!_0xb335l.local, signal);
}
return{...r, text: _0xc9f33(r.text), local};
};
}
return{ProviderError,parseModel,isLocalModel,makeTransport};})();
const _$m2_3c7=(()=>{const _$p=Uint8Array.from([238,218,130,165,220,204]),_$o=[0],_$l=[6],_$c=new Map(),_$td=new TextDecoder();
function _$s3c7(k){if(_$c.has(k))return _$c.get(k);const s=_$o[k],n=_$l[k],u=new Uint8Array(n);let q=3347633095;if((Math.imul(q|1,q|1)&7)!==1)return'';for(let i=0;i<s+n;i++){q=(q+0x9e3779b9)>>>0;if(i>=s){let z=q;z=Math.imul(z^(z>>>16),0x85ebca6b)>>>0;z=Math.imul(z^(z>>>13),0xc2b2ae35)>>>0;z=(z^(z>>>16))>>>0;u[i-s]=_$p[i]^(z&255)^((i*17)&255);}}const v=_$td.decode(u);_$c.set(k,v);return v;}
async function loadKernel(bytes){
const{ instance}= await WebAssembly.instantiate(bytes);
const _0xd3c70= instance.exports;
const _0x19a01= new TextEncoder();
const _0x5f792= new TextDecoder();
return{
call(op, args={}){
_0xd3c70.reset();
const _0xa5523= _0x19a01.encode(JSON.stringify({ op,...args}));
const ptr= _0xd3c70.alloc(_0xa5523.length);
new Uint8Array(_0xd3c70.memory.buffer, ptr, _0xa5523.length).set(_0xa5523);
const _0xeb2b4= _0xd3c70.call(ptr, _0xa5523.length);
const start= Number(_0xeb2b4>> 32n);
const _0x31045= Number(_0xeb2b4& 0xffffffffn);
return JSON.parse(_0x5f792.decode(new Uint8Array(_0xd3c70.memory.buffer, start, _0x31045)));
}
};
}
function makeScrubber(kernel, extra){
return(text)=>{
const _0x76dd6= kernel.call(_$s3c7(0),{ text});
const _0xbcb67= extra? extra(_0x76dd6.text):{ text: _0x76dd6.text, removed: 0};
return{ text: _0xbcb67.text, removed: _0x76dd6.map.length+ _0xbcb67.removed};
};
}
return{runCouncil:_$m0_b25.runCouncil,estimateCouncil:_$m0_b25.estimateCouncil,makeTransport:_$m1_868.makeTransport,parseModel:_$m1_868.parseModel,isLocalModel:_$m1_868.isLocalModel,ProviderError:_$m1_868.ProviderError,loadKernel,makeScrubber};})();
export const loadKernel=_$m2_3c7.loadKernel;
export const makeScrubber=_$m2_3c7.makeScrubber;
export const runCouncil=_$m2_3c7.runCouncil;
export const estimateCouncil=_$m2_3c7.estimateCouncil;
export const makeTransport=_$m2_3c7.makeTransport;
export const parseModel=_$m2_3c7.parseModel;
export const isLocalModel=_$m2_3c7.isLocalModel;
export const ProviderError=_$m2_3c7.ProviderError;
