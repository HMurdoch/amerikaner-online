#!/bin/bash

export DATABASE_URL='postgresql://elementech_hub_admin:StrongPasswordHere!@localhost:5432/elementech_hub_dev?options=-c%20search_path=elementech_hub,public'
export PORT=3001

cd /home/quadravex/Projects/e-ds.tech_v1
node server/scripts/migrate-cv-to-db.js
