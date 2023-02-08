d := $(shell pwd)
me := $(shell whoami)
pdfFile := "zoltan_domahidi_senior_software_engineer_resume.pdf"

build-html: #REMOVE MY ANALYTICS TOKEN FROM RESUME.MD IF YOU COPY THIS REPO
	docker run --rm -v "$(d):/data" -w /data pandoc/minimal:latest-alpine \
		--standalone \
		--template template.html \
		--output index.html \
		resume.md

build-pdf:
	# docker run --rm -v "$(d):/data" -w /data icalialabs/wkhtmltopdf \
	# 	--margin-top 0 \
	# 	--margin-bottom 0 \
	# 	--margin-left 0 \
	# 	--margin-right 0 \
	# 	index.html $(pdfFile)

build: build-html build-pdf
	sudo chown "$(me):$(me)" index.html $(pdfFile)
	# sudo chmod 777 index.html $(pdfFile)
