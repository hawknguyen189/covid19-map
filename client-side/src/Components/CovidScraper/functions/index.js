module.exports =
/******/ (function(modules, runtime) { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	__webpack_require__.ab = __dirname + "/";
/******/
/******/ 	// the startup function
/******/ 	function startup() {
/******/ 		// Load entry module and return exports
/******/ 		return __webpack_require__(932);
/******/ 	};
/******/
/******/ 	// run startup
/******/ 	return startup();
/******/ })
/************************************************************************/
/******/ ({

/***/ 50:
/***/ (function(module, __unusedexports, __webpack_require__) {

/*
 * Copyright (C) 2020 HERE Europe B.V.
 * Licensed under MIT, see full license in LICENSE
 * SPDX-License-Identifier: MIT
 */

const fetch = __webpack_require__(332)
const credentials = __webpack_require__(281)

const baseUrl = `https://xyz.api.here.com/hub/spaces`
const { spaceId, accessToken } = credentials

function deleteAllFeatures() {
  return fetch(`${baseUrl}/${spaceId}/features?tags=*`, {
    method: "delete",
    headers: {
      "Authorization": `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  })
}

module.exports = deleteAllFeatures


/***/ }),

/***/ 103:
/***/ (function(module) {

/*
 * Copyright (C) 2020 HERE Europe B.V.
 * Licensed under MIT, see full license in LICENSE
 * SPDX-License-Identifier: MIT
 */

module.exports = function prepareScrapedData(d) {
  const content = d.split("try { window.getAreaStat = ")[1].split("}catch(e){}")[0]
  const parsed = JSON.parse(content)
  return parsed.map(d => {
    return {
      country: "China",
      provincestate: translateProvinceName(d.provinceName),
      confirmed: d.confirmedCount,
      recoveries: d.curedCount,
      deaths: d.deadCount,
      updated: new Date().getTime(),
    }
  })
}

function translateProvinceName(name) {
  const names = {
    '辽宁省': "Liaoning",
    '湖北省': "Hubei",
    '江苏省': "Jiangsu",
    '河南省': "Henan",
    '福建省': "Fujian",
    '海南省': "Hainan",
    '山西省': "Shanxi",
    '重庆市': "Chongqing",
    '河北省': "Hebei",
    '香港': "Hong Kong",
    '湖南省': "Hunan",
    '浙江省': "Zhejiang",
    '山东省': "Shandong",
    '内蒙古自治区': "Inner Mongolia",
    '宁夏回族自治区': "Ningxia",
    '贵州省': "Guizhou",
    '广东省': "Guangdong",
    '云南省': "Yunnan",
    '四川省': "Sichuan",
    '陕西省': "Shaanxi",
    '黑龙江省': "Heilongjiang",
    '上海市': "Shanghai",
    '天津市': "Tianjin",
    '安徽省': "Anhui",
    '新疆维吾尔自治区': "Xinjiang",
    '北京市': "Beijing",
    '甘肃省': "Gansu",
    '广西壮族自治区': "Guangxi",
    '江西省': "Jiangxi",
    '吉林省': "Jilin",
    '台湾': "Taiwan",
    '澳门': "Macau",
    '青海省': "Qinghai",
    '西藏自治区': "Tibet",
    '待明确地区': "",
  }
  return names[name] || "N/A"
}


/***/ }),

/***/ 145:
/***/ (function(module) {

/*
 * Copyright (C) 2020 HERE Europe B.V.
 * Licensed under MIT, see full license in LICENSE
 * SPDX-License-Identifier: MIT
 */

function getSupplement(prefix = "", referenceSheet, sheet, dateHeaders) {
  const relevant = sheet
    ? sheet.find(s => (s["Province/State"] === referenceSheet["Province/State"]) && (s["Country/Region"] === referenceSheet["Country/Region"]))
    : referenceSheet
  return dateHeaders.reduce((acc, cur) => {
    if (!relevant[cur]) return acc
    acc[prefix + cur] = parseInt(relevant[cur])
    return acc
  }, {})
}

module.exports = getSupplement


/***/ }),

/***/ 151:
/***/ (function() {

eval("require")("dayjs");


/***/ }),

/***/ 180:
/***/ (function() {

eval("require")("d3-dsv");


/***/ }),

/***/ 281:
/***/ (function(module) {

/*
 * Copyright (C) 2020 HERE Europe B.V.
 * Licensed under MIT, see full license in LICENSE
 * SPDX-License-Identifier: MIT
 */

const spaceId = "INSERT_HERE_STUDIO_SPACE_ID"
const accessToken = "INSERT_HERE_ACCESS_TOKEN"
const secret = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"

module.exports = {
  spaceId,
  accessToken,
  secret,
}


/***/ }),

/***/ 332:
/***/ (function() {

eval("require")("node-fetch");


/***/ }),

/***/ 484:
/***/ (function(module, __unusedexports, __webpack_require__) {

/*
 * Copyright (C) 2020 HERE Europe B.V.
 * Licensed under MIT, see full license in LICENSE
 * SPDX-License-Identifier: MIT
 */

const fetch = __webpack_require__(332)
const credentials = __webpack_require__(281)

const baseUrl = `https://xyz.api.here.com/hub/spaces`
const { spaceId, accessToken } = credentials

function uploadToDataHub(reqBody) {
  return fetch(`${baseUrl}/${spaceId}/features`, {
    method: "put",
    body: JSON.stringify(reqBody),
    headers: {
      "Authorization": `Bearer ${accessToken}`,
      "Content-Type": "application/geo+json",
    },
  }).then(res => res.json())
}

module.exports = uploadToDataHub


/***/ }),

/***/ 711:
/***/ (function(module, __unusedexports, __webpack_require__) {

/*
 * Copyright (C) 2020 HERE Europe B.V.
 * Licensed under MIT, see full license in LICENSE
 * SPDX-License-Identifier: MIT
 */

const dsv = __webpack_require__(180)

function parseCsv(data) {
  const substitutes = {
    "2": "\"first_recorded\"",
    "3": "\"lat\"",
    "4": "\"long\"",
  }

  const rows = data.split("\n")
  const headers = rows[0].split(",").map((d, i) => {
    return substitutes[i] ? substitutes[i] : d
  }).join(",")
  const raw = headers + "\n" + rows.slice(1).join("\n")
  const parsed = dsv.csvParse(raw)

  return parsed
}

module.exports = parseCsv


/***/ }),

/***/ 718:
/***/ (function(module, __unusedexports, __webpack_require__) {

/*
 * Copyright (C) 2020 HERE Europe B.V.
 * Licensed under MIT, see full license in LICENSE
 * SPDX-License-Identifier: MIT
 */

const dayjs = __webpack_require__(151)

function mergeData(dateHeaders, jhuData, dxyDate) {
  const latestJHUDate = dayjs(dateHeaders[dateHeaders.length - 1]).format("M/D/YYYY")
  const latestJHUDateFull = dateHeaders[dateHeaders.length - 1]
  const latestDxyDate = dayjs(dxyDate[0].updated).format("M/D/YYYY")

  const isSameDay = latestJHUDate === latestDxyDate

  return jhuData.map(point => {
    const listAsChina = point.countryregion === "Mainland China" || point.countryregion === "Macau" || point.countryregion === "Hong Kong" || point.countryregion === "Taiwan"
    const relevantData = dxyDate.find(s => s.provincestate === point.provincestate)
    
    const timeNow = dayjs().subtract(dayjs().utcOffset(), "minute").format("h:mm a")

    const relevantDate = isSameDay ? latestJHUDateFull : latestDxyDate + ` ${timeNow}`

    const base = {
      ...point,
      countryregion: listAsChina ? "China" : point.countryregion,
    }

    const newConfirmed = listAsChina ? relevantData.confirmed : point[latestJHUDateFull]
    const newRecovered = listAsChina ? relevantData.recoveries : point["recoveries_" + latestJHUDateFull]
    const newDeath = listAsChina ? relevantData.deaths : point["deaths_" + latestJHUDateFull]

    if (newConfirmed) base[relevantDate] = newConfirmed
    if (newRecovered) base["recoveries_" + relevantDate] = newRecovered
    if (newDeath) base["deaths_" + relevantDate] = newDeath

    if (!isSameDay) {
      base.headers = base.headers + `;;${relevantDate.toLowerCase()}`
    }

    return base
  })
}

module.exports = mergeData


/***/ }),

/***/ 932:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

/*
 * Copyright (C) 2020 HERE Europe B.V.
 * Licensed under MIT, see full license in LICENSE
 * SPDX-License-Identifier: MIT
 */


const fetch = __webpack_require__(332)
const dayjs = __webpack_require__(151)

const parseCsv = __webpack_require__(711)
const getSupplement = __webpack_require__(145)
const mergeData = __webpack_require__(718)
const prepareScrapedData = __webpack_require__(103)
const deleteAllFeatures = __webpack_require__(50)
const uploadToDataHub = __webpack_require__(484)
const credentials = __webpack_require__(281)

const { secret } = credentials

exports.handler = (event, context, callback) => {
  const apiKey = event.queryStringParameters.apiKey
  if (apiKey !== secret) {
    callback(null, {
      statusCode: 403,
      body: `You don't have access!`,
    })
    return
  }

  const sheets = ["Confirmed", "Recovered", "Deaths"]

  const sheetQueries = sheets.map(sheetName => {
    return fetch (`https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-${sheetName}.csv`).then(d => d.text())
  })

  Promise.all([
    ...sheetQueries,
    fetch("https://ncov.dxy.cn/ncovh5/view/pneumonia").then(d => d.text()),
  ]).then(values => {

    const [confirmedRaw, recoveredRaw, deathRaw] = values.slice(0, 3).map(d => parseCsv(d))
    const dxyData = prepareScrapedData(values[3])

    const [dateHeadersRaw, otherHeaders] = confirmedRaw.columns.reduce((acc, cur, i) => {
      if (!i) acc = [[],[]]
      const d = dayjs(cur).format("M/D/YYYY h:mm a")
      if (d === "Invalid Date") acc[1].push(cur)
      else acc[0].push(cur)
      return acc
    }, [])

    const dateHeaders = dateHeadersRaw.map(d => dayjs(d).format("M/D/YYYY h:mm a"))

    const confirmed = confirmedRaw.map(d => {
      return Object.keys(d).reduce((acc, cur) => {
        const isOtherHeader = otherHeaders.includes(cur)
        const asDate = dayjs(cur).format("M/D/YYYY h:mm a")
        const isDate = asDate !== "Invalid Date"
        if (isDate && dateHeaders.includes(asDate)) {
          acc[asDate] = parseInt(d[cur])
        } else if(isOtherHeader) {
          acc[cur] = d[cur]
        } else {
          return acc
        }
        return acc
      }, {})
    })

    const recovered = recoveredRaw.map(d => {
      return Object.keys(d).reduce((acc, cur) => {
        const isOtherHeader = otherHeaders.includes(cur)
        const asDate = dayjs(cur).format("M/D/YYYY h:mm a")
        const isDate = asDate !== "Invalid Date"
        if (isDate && dateHeaders.includes(asDate)) {
          acc[asDate] = parseInt(d[cur])
        } else if(isOtherHeader) {
          acc[cur] = d[cur]
        } else {
          return acc
        }
        return acc
      }, {})
    })

    const death = deathRaw.map(d => {
      return Object.keys(d).reduce((acc, cur) => {
        const isOtherHeader = otherHeaders.includes(cur)
        const asDate = dayjs(cur).format("M/D/YYYY h:mm a")
        const isDate = asDate !== "Invalid Date"
        if (isDate && dateHeaders.includes(asDate)) {
          acc[asDate] = parseInt(d[cur])
        } else if(isOtherHeader) {
          acc[cur] = d[cur]
        } else {
          return acc
        }
        return acc
      }, {})
    })

    const jhuData = confirmed.map(d => {
      const supplementConfirmed = getSupplement("", d, null, dateHeaders)
      const supplementRecovered = getSupplement("recoveries_", d, recovered, dateHeaders)
      const supplementDeath = getSupplement("deaths_", d, death, dateHeaders)
      return {
        provincestate: d["Province/State"],
        countryregion: d["Country/Region"],
        // Fix column mismatch in the dataset
        lat: d["first_recorded"],
        long: d["lat"],
        headers: dateHeaders.join(";;"),
        ...supplementConfirmed,
        ...supplementRecovered,
        ...supplementDeath,
      }
    })

    const mergedData = mergeData(dateHeaders, jhuData, dxyData)

    const geojson = {
      type: "FeatureCollection",
      features: mergedData.map(properties => {

        const keys = Object.keys(properties)
        const newProps = keys.reduce((acc, cur) => {
          acc[cur.toLowerCase()] = properties[cur]
          return acc
        }, {})

        return {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [parseFloat(properties.long), parseFloat(properties.lat)],
          },
          properties: newProps,
        }
      }),
    }

    deleteAllFeatures()
      .then(() => {
        uploadToDataHub(geojson)
          .then(() => {
            callback(null, {
              statusCode: 200,
              body: "Success!",
            })
          })
          .catch(error => {
            callback(null, {
              statusCode: 422,
              body: String(error),
            })
          })
      })

  })

}


/***/ })

/******/ });