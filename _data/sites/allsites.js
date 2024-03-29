module.exports = {
	name: "ALL", // optional, falls back to object key
	description: "所有站点数据",
	skip:false,
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	// skip: !process.env.CONTEXT || process.env.SITE_NAME !== "speedlify",
	options: {
		frequency: 60 * 23, // 24 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "run"
	},
	urls: [
		"https://www.lightnode.com/",
		"https://console.lightnode.com/",
		"https://www.lightnode.cn/",
		"https://vpssos.com/",
		"https://laysky.com/",
		"https://www.darkmap.cn/",
		"https://www.fuwu7.com/",
	]
};