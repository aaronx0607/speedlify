module.exports = {
	name: "所有站点测速", // optional, falls back to object key
	description: "所有站点情况",
	options: {
		frequency: 60 * 23, // (in minutes), 23 hours
	},
	urls: [
		"https://www.lightnode.com/",
		"https://console.lightnode.com/",
    "https://www.lightnode.cn/",
		"https://vpssos.com/",
		"https://laysky.com/",
		"https://www.darkmap.cn/",
	]
};