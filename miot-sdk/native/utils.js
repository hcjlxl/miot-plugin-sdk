import _uuid from"uuid";import base64js from"base64-js";export const uuid=_uuid;export const base64=base64js;export function randomInt(t,e){return Math.floor(Math.random()*(e-t)+t)};function charsExchanger(t,e){const n=Math.floor(e.length/t.length),r=e.length%t.length,o={};return t.split("").forEach((t,a)=>{o[t]=a<r?e.substr(a*n+a,n+1):e.substr(a*n+r,n)}),t=>t.split("").map(t=>o[t].charAt(randomInt(0,o[t].length))).join("")}export function swap(t,e,n){const r=t[e];t[e]=t[n],t[n]=r};const stamp={t:0,i:0,min:5611212902196,r:3,rand:t=>{const e=t.length-1;for(let n=0,r=Math.floor(e/3),o=2*r;n<r;n++)swap(t,r+n,o+n),swap(t,n,o-n);for(let n=0,r=Math.ceil(e/2);n<r;n++)swap(t,n,e-n);return t},exchange:charsExchanger("0123456789","oczunqsgrtfldhapyejbimvkwx")};export function uniqueToken32(t=!0){const e=(new Date).getTime();e!=stamp.t&&(stamp.ts=stamp.rand((e+stamp.min+"").split("")),stamp.t=e,stamp.i=randomInt(1e7,99999999),stamp.r=stamp.i%10,swap(stamp.ts,stamp.r,stamp.ts.length-1-stamp.r));const n=++stamp.i%1e8+""+stamp.r+randomInt(1e7,99999999),r=Math.floor((n.length-stamp.ts.length)/2);let o=stamp.ts.map((t,e)=>e%2?t+n.charAt(r+e):n.charAt(r+e)+t).join("");for(o=n.substr(0,r)+o+n.substr(r+stamp.ts.length),o=stamp.rand(o.split("")).join("");o.length<32;)o=randomInt(0,10)+o;return t?(t="function"==typeof t?t:stamp.exchange)(o):o};export function rgbToHex(t,e,n){return((t<<16)+(e<<8)+n).toString(16).padStart(6,"0")};export function hexToRgb(t){return`rgb(${t.slice(1).match(/.{2}/g).map(t=>parseInt(t,16)).join()})`};export function format(t,...e){if(!t)return"";const n=e.length;return n<1?t:t.replace(/[{][1-9][0-9]?[}]/g,t=>{const r=parseInt(t.substring(1,t.length-1));return r<1||r>n?t:e[r-1]})};export function typeName(t){const e=Object.prototype.toString.call(t);return e.substr(8,e.length-9).toLowerCase()};export function className(t){return void 0===t?"undefined":null===t?"null":t.constructor.name.toLowerCase()};export function getUrlParameters(t){return t.match(/([^?=&]+)(=([^&]*))/g).reduce((t,e)=>(t[e.slice(0,e.indexOf("="))]=e.slice(e.indexOf("=")+1),t),{})};export function setReadonly(t,e,n){return Object.defineProperty(t,e,{enumerable:!0,configurable:!1,get:()=>n,set:()=>{}})};export function setObjectReadonly(t,...e){return t?((e&&e.length>0?e:Object.keys(t)).forEach(function(e){setReadonly(t,e,t[e])}),t):t};export function setObjectAsConstants(t){return t?(Object.keys(t).forEach(e=>{setReadonly(t,e,t[e]||e)}),t):{}};function createArrayFormater(t){if(t.length<1)return t=>"";const e=t[0];return"function"==typeof e?e:(...e)=>{if(e.length>0)for(let n=1;n<t.length;n++){const r=t[n];if(!Array.isArray(r)||r.length<2)continue;const o=r[0];if("function"==typeof o){if(!o(...e))continue}else if(e[0]!=o)continue;return format(r[1],...e)}return format(t[0],...e)}}export function formats(t){return Object.keys(t).forEach(function(e){const n=t[e];Array.isArray(n)?setReadonly(t,e,createArrayFormater(n)):n&&"object"===typeName(n)&&formats(n)}),t};export function getStandardLanguageName(t,e){if(!t)return"en";const n=t=>t.toLowerCase().replace(/-/g,"_");t=n(t);const r=Object.keys(e);for(let o=0;o<r.length;o++){const a=r[o],s=e[a];if(s)if(Array.isArray(s)){for(let e=0;e<s.length;e++)if("function"==typeof s[e].test){if(s[e].test(t))return a}else if(t==n(s[e]))return a}else if("function"==typeof s){if(s(t))return a}else if("function"==typeof s.test){if(s.test(t))return a}else if(t==n(s))return a}return"en"};export const REGEXP_EMAIL=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;export default{swap:swap,randomInt:randomInt,uniqueToken32:uniqueToken32,format:format,formats:formats,createArrayFormater:createArrayFormater,typeName:typeName,className:className,setReadonly:setReadonly,setObjectReadonly:setObjectReadonly,setObjectAsConstants:setObjectAsConstants,hexToRgb:hexToRgb,rgbToHex:rgbToHex,getUrlParameters:getUrlParameters,getStandardLanguageName:getStandardLanguageName,REGEXP_EMAIL:REGEXP_EMAIL};