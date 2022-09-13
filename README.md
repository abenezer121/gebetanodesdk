
A composable, Future-based library for making HTTP requests to GebetaMap.

This package contains a set of high-level functions that make it
easy to consume HTTP resources from GebetaMap. It's multi-platform, and supports mobile, desktop,
and the browser.

## Using
making direction request to gebeta map
```js
    import { direction } from 'gebetamap';
    let start = {lat : 9.4343 , lon : 38.,434534}
    let stop = {lat :9.2334 , lon : 38.53432}
    const apiKey = ""
    let data = await direction(start , stop , apiKey) 

```

making travels salesman request to gebeta map

```js
import { tss } from 'gebetamap';

  const  apiKey = "";
  let points = [
    {lat: 9.021739361296081, lng: 38.80397726479262},
    {lat: 9.02153803517439, lng: 38.7967248502125},
    {lat: 9.022671817658015, lng: 38.800082846904175},
    {lat: 9.023773808433624, lng: 38.7980015512}]
    const ts = await tss(points , apiKey)

 
```

making one to many request 
```js
import { oneToMany } from 'gebetamap';
   let start = {lat : 9.4343 , lon : 38.,434534}
   const apiKey = ""
   let points = [
    {lat: 9.021739361296081, lng: 38.80397726479262},
    {lat: 9.02153803517439, lng: 38.7967248502125},
    {lat: 9.022671817658015, lng: 38.800082846904175},
    {lat: 9.023773808433624, lng: 38.7980015512}]
    const onm = await oneToMany  (start, points, apiKey)

```



making Geocoding request
``` js
    import { geocoding } from 'gebetamap';
    String name = "kotebe 02";
    String apiKey = "";
    const geo = await geocoding(name, apiKey)
```


