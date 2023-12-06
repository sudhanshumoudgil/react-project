.PHONY: extract
extract:
	mkdir -p l10n
	./node_modules/.bin/stex -s 'src/**/*.js' -o l10n/extracted.json
	./node_modules/.bin/jsonpo -s l10n/extracted.json -o l10n/messages.pot -p -c 'Test team' -b 'test@l10n.com' -y 2017

ru_json:
	./node_modules/.bin/pojson -s l10n/ru.po -o l10n/ru.json -m
	cp l10n/ru.json public/ru.json

merge_po:
	msgmerge l10n/ru.po l10n/messages.pot -U # standard gettext utility
	rm l10n/ru.po~

