# My First Experience Using OpenAI API: commit-summary

I've been meaning to mess around with OpenAI's API for a while, and I finally got around to it with my latest repo: [commit-summary](https://github.com/Rvndyr/commit-summary). This is a small project that takes a list of public Git commits and generates a summary using OpenAI's API. Pretty simple, but a good way to get my feet wet.

## Why?

Sometimes commit messages can be... less than ideal. Maybe they're too verbose, too cryptic, or just straight-up garbage. The idea here was to take a bunch of commit messages and have an AI generate a concise, readable summary—something that could be useful in a changelog or a PR description.

## How It Works

0. A Github Action runs | 
1. Fetch commit messages from Github Activiy list.
2. Format them into a prompt.
3. Send the prompt to OpenAI's API.
4. Get back a cleaned-up summary.
5. Post Summary report into my portfolio repo: [portfolio](https://github.com/Rvndyr/rvndyr.github.io)

I used Python for this, with `openai` to interact with the API and `github` API to pull the latest activity in my own personal & public github account. The prompt engineering was the trickiest part—figuring out how to get the best summary while keeping the request efficient.

## Challenges

- **Prompt tuning**: The way you structure your request heavily affects the output. Small tweaks can make a big difference.
- **Cost awareness**: Even though this is a small project, it's worth keeping an eye on token usage to avoid unnecessary costs.

## Takeaways

Playing with OpenAI's API was a good learning experience. The results were surprisingly good (most of the time), but it's clear that prompt design is an art 🥲. There's definitely room to improve this project, maybe by fine-tuning responses further or some other ideas I have ☺️.

If you're curious, check out the repo: [commit-summary](https://github.com/Rvndyr/commit-summary). I'm open to feedback and PRs!

---