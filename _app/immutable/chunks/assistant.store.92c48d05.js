import{w as f}from"./index.113f7b86.js";import{g as _}from"./tables.store.e0a4b897.js";import{p as h}from"./projectCharter.store.d11a0eea.js";import{O as b}from"./scheduler.427c93e9.js";class N{constructor(){this.apiKey="",this.mediaRecorder=null,this.audioChunks=[],this.playbackAudio=null}setApiKey(t){console.log("new api key was set:",t),this.apiKey=t}async record(){if(this.apiKey=="")throw new Error("Api key not set");const t=await navigator.mediaDevices.getUserMedia({audio:!0});this.mediaRecorder=new MediaRecorder(t),this.mediaRecorder.ondataavailable=o=>{this.audioChunks.push(o.data)};let s=new Promise((o,l)=>{this.mediaRecorder.onstop=async()=>{o()}});return this.mediaRecorder.start(),s}async transcribe(){if(this.apiKey=="")throw new Error("Api key not set");const t=new Blob(this.audioChunks,{type:"audio/wav"}),s=new File([t],"recording.wav"),o=new FormData;o.append("file",s),o.append("model","whisper-1");const n=(await(await fetch("https://api.openai.com/v1/audio/transcriptions",{method:"POST",headers:{Authorization:`Bearer ${this.apiKey}`},body:o})).json()).text;return console.log("Transkribierter Text:",n),n}stopRecording(){this.mediaRecorder&&(this.mediaRecorder.stop(),this.audioChunks=[])}stopPlayback(){if(console.log("stopping audio playback"),this.playbackAudio){this.playbackAudio.pause();const t=this.playbackAudio;this.playbackAudio=null,t.onended&&t.onended()}}stop(){this.stopRecording()}async sendToGPT(t,s){if(this.apiKey=="")throw new Error("Api key not set");const o={model:"gpt-4o-mini",messages:t,tools:s};return(await(await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{Authorization:`Bearer ${this.apiKey}`,"Content-Type":"application/json"},body:JSON.stringify(o)})).json()).choices[0]}async speak(t){if(this.apiKey=="")throw new Error("Api key not set");const o=await(await fetch("https://api.openai.com/v1/audio/speech",{method:"POST",headers:{Authorization:`Bearer ${this.apiKey}`,"Content-Type":"application/json"},body:JSON.stringify({input:t,model:"tts-1",voice:"shimmer"})})).blob(),l=URL.createObjectURL(o),e=new Audio(l);return this.playbackAudio=e,new Promise(n=>{e.onended=()=>{console.log("audio playback ended, revoking URL"),URL.revokeObjectURL(l),this.playbackAudio=null,n("completed")},e.addEventListener("canplaythrough",()=>{e.play().catch(r=>{console.error("Error playing audio:",r),this.playbackAudio=null,n("error")})})})}async generateTasks(t,s){console.log("Starting generate Tasks");let o=JSON.stringify(s);t.push({role:"developer",content:`This is the current task table as JSON (Array containing the rows of the table, starting with the headings):
`+o}),t.push({role:"developer",content:"Update the given task table based on the information of the last messages of the conversation. The headings should be the same. Answer just with an JSON string without any other text. Your answer must be parsable with JSON.parse(), so not even Markdown code blocks should be included."});let l=await this.sendToGPT(t);return JSON.parse(l)}async generateRessources(t,s){}}const T=f([]);function O(a){T.update(t=>[...t,{id:Date.now(),text:a,timestamp:new Date().toISOString()}])}function I(a){T.update(t=>t.filter(s=>s.id!==a))}var p=new N,P=50;const v=[{role:"developer",content:"You are a helpful assistant for Project Management integrated into a Project Management Software. Keep your answers very short. Ask questions if something important. Make useful assumptions when something is undefined."},{role:"developer",content:"Ensure that a complete project charter exists. If not, suggest to the user to complete it first, but accept to proceed if the user insists."},{role:"developer",content:"In general, make useful assumptions, but also ask questions to clarify, get more details regarding a recent action or to define the fundamentals (e.g. project charter)."},{role:"developer",content:"Use tools to plan the project. At least every "+(P-2)+" tool roundtrips you have to respond with a message to the user."},{role:"developer",content:"Dates must use the format YYYY-MM-DD."},{role:"developer",content:"You can add or remove AI suggestions for project improvement. Use the manage_suggestions tool to do so, at regular intervals."},{role:"developer",content:"Respond to the user in its prefered language. The browser tells us, that the user preferes the following language: "+(navigator.language||navigator.userLanguage)},{role:"developer",content:"The _level column is used to represent the hierarchy of the tasks. It is not visible to the user. If the previous task has the same level, they are siblings, if the previous task has a lower level it is the parent of the current task and so on."},{role:"developer",content:"When creating sub-tasks make sure to place them close to their siblings and set the correct _level value."},{role:"developer",content:"The Id column is visible to the user and must be used to identify tasks. The Start and Deadline columns are visible to the user and are completely optional (should be left empty if not known, but must be part of the table). They can be used to se fixed dates on tasks, but that should gennerally be avoided."}],i=f({isRecording:!1,isThinking:!1,isSpeaking:!1,status:"idle"}),D=f();function U(){const{subscribe:a,set:t,update:s}=f(v);return{subscribe:a,set:t,update:s,reset:()=>t(v)}}const g=U();let m=[];g.subscribe(a=>m=a);let y=_("tasks"),j;y.subscribe(a=>j=a);let w=_("resources"),S;w.subscribe(a=>S=a);const x=[{type:"function",strict:!0,function:{name:"update_project_charter",description:"Update the project charter with new information or assumptions",parameters:{type:"object",properties:{field:{type:"string",description:"The field to update in the project charter",enum:["projectName","projectDescription","projectManager","startDate","endDate","objectives","stakeholders","scope","assumptions","constraints","risks","budget","success_criteria","key_deliverables"]},value:{oneOf:[{type:"string",description:"Value for single-value fields like projectName, description, dates, etc."},{type:"array",description:"Value for array fields like objectives, stakeholders, etc.",items:{type:"string"}},{type:"object",description:"Value for object fields like scope and budget",properties:{inScope:{type:"array",items:{type:"string"}},outOfScope:{type:"array",items:{type:"string"}},amount:{type:"number"},currency:{type:"string"}}}]},is_assumption:{type:"boolean",description:"Whether this value is an assumption made by the assistant (true) or information provided by the user (false)"}},required:["field","value","is_assumption"],additionalProperties:!1}}},{type:"function",strict:!0,function:{name:"operate_on_table",description:"Perform operations on the tasks or resources table. For tasks table, content must match the format [Id, Task, Min, Likely, Max, Resources, Predecessors, Progress]. For resources table, content must start with Date column followed by resource availability hours.",parameters:{type:"object",properties:{table_name:{type:"string",description:"Name of the table to be operated upon",enum:["tasks","resources"]},operation:{type:"string",description:"What operation should be performed on the table. For add_rows and replace_rows, content array is required. For delete_rows, ids array is required.",enum:["add_rows","replace_rows","delete_rows","clear_table","add_or_replace_columns"]},ids:{type:"array",description:"Array of unique identifiers for the rows/columns to be affected. For add_or_replace_columns, these are the column header names. Required for delete_rows operation.",items:{type:"string"}},content:{type:"array",description:"Array of row/column contents. For rows, each item must be an array matching the table format. For columns, each item must be an array starting with the column name followed by values. Required for add_rows and replace_rows operations.",items:{type:"array",items:{type:"string"},minItems:1}},after_id:{type:"string",description:"For add_rows operation, specifies the ID of the row after which to add the new rows. If not provided, rows will be added at the end."},validate_format:{type:"object",description:"Validation rules for the content format",properties:{tasks:{type:"object",properties:{columns:{type:"array",items:{type:"string",enum:["_level","Id","Task","Min","Likely","Max","Resources","Predecessors","Progress","Start","Deadline"]},minItems:11,maxItems:11},validators:{type:"object",properties:{_level:{type:"string",pattern:"^\\d+$"},Id:{type:"string"},Task:{type:"string"},Min:{type:"string",pattern:"^\\d+(\\.\\d+)?$"},Likely:{type:"string",pattern:"^\\d+(\\.\\d+)?$"},Max:{type:"string",pattern:"^\\d+(\\.\\d+)?$"},Resources:{type:"string"},Predecessors:{type:"string"},Progress:{type:"string",pattern:"^\\d+$"},Start:{type:"string",pattern:"^(\\d{4}-\\d{2}-\\d{2})?$"},Deadline:{type:"string",pattern:"^(\\d{4}-\\d{2}-\\d{2})?$"}}}}},resources:{type:"object",properties:{date_format:{type:"string",pattern:"^\\d{4}-\\d{2}-\\d{2}$"},hours_format:{type:"string",pattern:"^\\d+(\\.\\d+)?$"}}}}}},required:["table_name","operation"],additionalProperties:!1}}},{type:"function",strict:!0,function:{name:"rename_heading",description:"Rename a single column heading in a table",parameters:{type:"object",properties:{table_name:{type:"string",description:"Name of the table to be operated upon",enum:["tasks","resources"]},old_heading:{type:"string",description:"The current name of the heading to be renamed"},new_heading:{type:"string",description:"The new name for the heading"}},required:["table_name","old_heading","new_heading"],additionalProperties:!1}}},{type:"function",strict:!0,function:{name:"manage_suggestions",description:"Add or remove AI suggestions for project improvement. Use this to provide dynamic suggestions based on the project state and conversation context.",parameters:{type:"object",properties:{action:{type:"string",enum:["add","remove"],description:"Whether to add a new suggestion or remove an existing one"},suggestion:{type:"string",description:"For 'add': The suggestion text to add. For 'remove': The suggestion ID to remove"},reason:{type:"string",description:"The reasoning behind adding or removing this suggestion"}},required:["action","suggestion"]}}}];function M(a){let t=[];return a.forEach(s=>{let o=s.function,l=s.id,e=JSON.parse(o.arguments),n;if(o.name==="update_project_charter"){if(b(h)||h.initialize(),h.updateField(e.field,e.value),e.is_assumption){const r=b(h).assumptions||[],d=`Assumed ${e.field}: ${JSON.stringify(e.value)}`;r.includes(d)||h.updateField("assumptions",[...r,d])}}else if(o.name==="operate_on_table"){switch(e.table_name){case"tasks":n=y;break;case"resources":n=w;break;default:throw console.error("Undefined table_name was requested:",o.name,e),new Error("Undefined table_name was requested.")}switch(e.operation){case"add_rows":console.log("add_rows operation:",e),console.log("Content:",JSON.stringify(e.content)),n.update(r=>{try{return r.add_rows(e.content,e.after_id||null),r}catch(d){throw console.error("Error in add_rows:",d),d}});break;case"replace_rows":console.log("replace_rows operation:",e),console.log("Content:",JSON.stringify(e.content)),n.update(r=>{try{return r.replace_rows(e.content),r}catch(d){throw console.error("Error in replace_rows:",d),d}});break;case"delete_rows":console.log("operation",e.operation,e),n.update(r=>(console.log("Update t",r),r.delete_rows(e.ids),r));break;case"clear_table":console.log("operation",e.operation,e),n.update(r=>(console.log("Update t",r),r.clear_table(),r));break;case"add_or_replace_columns":console.log("operation",e.operation,e),n.update(r=>(console.log("Update t",r),r.add_or_replace_columns(e.ids,e.content),r));break;default:throw new Error("Undefined tool operation was called:",o.name,e)}}else if(o.name==="rename_heading"){switch(console.log("operation rename_heading",e),e.table_name){case"tasks":n=y;break;case"resources":n=w;break;default:throw console.error("Undefined table_name was requested:",o.name,e),new Error("Undefined table_name was requested.")}n.update(r=>{console.log("Update t",r);const c=r.getHeader().map(u=>u===e.old_heading?e.new_heading:u);return r.changeHeadings(c),r})}else if(o.name==="manage_suggestions")e.action==="add"?O(e.suggestion):e.action==="remove"&&I(e.suggestion);else throw new Error("Undefined tool function was called:",o.name);t.push({role:"tool",content:"success",tool_call_id:l})}),t}async function A(a){var o,l;let t=null,s=0;for(;t==null&&s<10;){const e=b(h);let n=JSON.parse(JSON.stringify(a));e?n.push({role:"developer",content:`Project context from charter: ${JSON.stringify({name:e.projectName||"Not specified",description:e.projectDescription||"Not specified",manager:e.projectManager||"Not specified",startDate:e.startDate||"Not specified",endDate:e.endDate||"Not specified",objectives:(o=e.objectives)!=null&&o.length?e.objectives:["Not specified"],stakeholders:(l=e.stakeholders)!=null&&l.length?e.stakeholders:["Not specified"]})}`}):n.push({role:"developer",content:"No project charter information available."}),n.push({role:"developer",content:"Tables are represented in JSON (an Array containing row, each row being an array itself with the columns as the fields). An empty Table always contains the first row with the headings. The first column consists of all the first fields of all the first rows."});let r=JSON.stringify(j);n.push({role:"developer",content:"About task table fields: Min, Likely and Max are estimated hours of effort to complete the task. Resources defines which resources can be used to complete the task. If multiple options exist, they can be separated by commas. If multiple resources are required together, an & can be used to connect them. The ampersand binds stronger than the comma. Do not summarize the resources, but use them as single values, because they are being used in other places of the program. Predecessors is a list of Ids separated by commas which must be left empty if none is pressent. Progress is an integer between 0 and 100. When you add or remove tasks, also think about adjusting the dependencies of predecessor tasks and successors. It might not be obvious, but it is important."}),n.push({role:"developer",content:`The current task table:
`+r});let d=JSON.stringify(S);n.push({role:"developer",content:"About resource table fields: The first column contains dates and every other column contains the available hours one ressource can work for the project."}),n.push({role:"developer",content:`The current resource table:
`+d});let c=await p.sendToGPT(n,x);console.log("response",c),g.update(u=>(u.push(c.message),u)),c.message.tool_calls!==void 0&&c.message.tool_calls.length>0&&M(c.message.tool_calls).forEach(R=>{g.update(k=>(k.push(R),k))}),s++,t=c.message.content}return t}i.record=async()=>{i.update(s=>({...s,isRecording:!0,status:"recording"})),await p.record(),i.update(s=>({...s,isRecording:!1,status:"transcribing"}));let a=await p.transcribe();g.update(s=>(s.push({role:"user",content:a}),s)),console.log("conversation:",m),i.update(s=>({...s,isThinking:!0,status:"thinking"}));let t=await A(m);if(i.update(s=>({...s,isThinking:!1})),t!=null){console.log("GPT-Antwort:",t),i.update(o=>({...o,isSpeaking:!0,status:"speaking"}));let s=await p.speak(t);console.log("the promise looks like this:",s),i.update(o=>({...o,isSpeaking:!1,status:"idle"}))}else i.update(s=>({...s,status:"idle"}))};i.handleTextInput=async()=>{i.update(t=>({...t,isThinking:!0,status:"thinking"}));let a=await A(m);if(i.update(t=>({...t,isThinking:!1})),a!=null){console.log("GPT-Antwort:",a),i.update(s=>({...s,isSpeaking:!0,status:"speaking"}));let t=await p.speak(a);console.log("the promise looks like this:",t),i.update(s=>({...s,isSpeaking:!1,status:"idle"}))}else i.update(t=>({...t,status:"idle"}))};i.stop=()=>{p.stopRecording(),i.update(a=>({...a,isRecording:!1,isThinking:!1,isSpeaking:!1,status:"idle"}))};i.stopSpeaking=()=>{p.stopPlayback()};D.subscribe(a=>{p.setApiKey(a)});export{T as a,D as b,g as c,i as d};
