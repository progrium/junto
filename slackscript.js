slack.on("slashCommand", function(cmd) {
	cmd.on("hello")
		.description("says hello")
		.action(function(params) {
			cmd.publicReply("hello yourself");
		});

	cmd.on("goodbye")
		.description("says goodbye")
		.action(function(params) {
			cmd.publicReply("goodbye, "+cmd.userName);
		});

	cmd.on("show source")
		.description("shows script source")
		.action(function(params) {
			cmd.publicReply(slack.preformatted(__script));
		});

	cmd.run();
});
