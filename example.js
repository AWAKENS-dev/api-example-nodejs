#!/usr/bin/env node

const fetch = require("node-fetch");  // npm install node-fetch

const token = "GENOMELINKTEST";
const headers = { "Authorization": `Bearer ${token}` }

const phenotype = "eye-color";
const population = "european";
const reportUrl = `https://genomicexplorer.io/v1/reports/${phenotype}/?population=${population}`;
fetch(reportUrl, {
  headers: headers
})
  .then(res => res.json())
  .then(json => { console.log(json); });

const chrom = "chr1";
const start = "100000";
const end = "100500";
const sequenceUrl = `https://genomicexplorer.io/v1/genomes/sequence/?region=${chrom}:${start}-${end}`;
fetch(sequenceUrl, {
  headers: headers
})
  .then(res => res.json())
  .then(json => { console.log(json); });
