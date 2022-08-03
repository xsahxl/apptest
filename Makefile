CURRENT_BRANCH_NAME := $(shell git log --pretty='%s' -1)

publish:
	git push origin main
	gh release create $(CURRENT_BRANCH_NAME) --notes "test" --target main --title "Release $(CURRENT_BRANCH_NAME)"
