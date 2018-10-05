'use strict';

/**
 * "kitchen sink" tests - just throw everything at the wall
 * and see what sticks.
 */

var testUtils = require('../test-utils');
var should = testUtils.should;

function humanizeNum(i) {
  var res = (i + 1).toString();
  while (res.length < 3) {
    res = '0' + res;
  }
  return res;
}

module.exports = function (dbType, context) {

  describe(dbType + ': kitchen-sink', function () {

    /* jshint maxlen:false */

    // to actually generate the list:
    // var configs = // whatever python spit out
    // var tests = []
    // configs.forEach(function (config) {db.find(config).then(function (res) {return {res: {docs: res.docs.map(function (doc) {return doc._id;})}}}, function (err){return {err: err}}).then(function (res){tests.push({input: config, output: res})})})
    var testConfigs = [{"input":{"selector":{"$and":[{"series":{"$gte":"mario"}},{"series":{"$eq":"f-zero"}},{"series":{"$eq":"mario"}}]}},"output":{"err":{"status":500,"name":"function_clause","message":"Database encountered an unknown error","error":true,"reason":null}}},{"input":{"sort":["name","debut"],"selector":{"debut":{"$gte":1990}}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index exists for this sort, try indexing: name, debut"}}},{"input":{"sort":["series","rank"],"selector":{"$and":[{"_id":{"$gte":"samus"}},{"name":{"$lte":"mario"}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index exists for this sort, try indexing: series, rank"}}},{"input":{"sort":["rank"],"selector":{"$and":[{"name":{"$lte":"mario"}},{"debut":{"$gt":1992}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index can satisfy both the selector and sort specified."}}},{"input":{"sort":["rank","debut","name"],"selector":{"$and":[{"rank":{"$ne":10}},{"debut":{"$gte":1990}},{"rank":{"$lte":9}},{"debut":{"$ne":1990}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index exists for this sort, try indexing: rank, debut, name"}}},{"input":{"sort":["series","rank"],"selector":{"rank":{"$gte":6}}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index exists for this sort, try indexing: series, rank"}}},{"input":{"sort":["series","rank"],"selector":{"$and":[{"series":{"$gte":"mario"}},{"_id":{"$gt":"falcon"}},{"debut":{"$eq":1990}},{"series":{"$eq":"earthbound"}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index exists for this sort, try indexing: series, rank"}}},{"input":{"sort":["rank","series"],"selector":{"$and":[{"rank":{"$ne":10}},{"series":{"$gte":"kirby"}},{"rank":{"$gt":4}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index exists for this sort, try indexing: rank, series"}}},{"input":{"sort":["name"],"selector":{"series":{"$lt":"pokemon"}}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index can satisfy both the selector and sort specified."}}},{"input":{"selector":{"$and":[{"_id":{"$gt":"mario"}},{"debut":{"$lt":1996}}]}},"output":{"res":{"docs":["ness","samus","yoshi"]}}},{"input":{"selector":{"rank":{"$gt":12}}},"output":{"res":{"docs":[]}}},{"input":{"sort":["name"],"selector":{"_id":{"$ne":"pikach"}}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"There is no operator in this selector can used with an index."}}},{"input":{"sort":["debut"],"selector":{"$and":[{"_id":{"$gte":"mario"}},{"series":{"$ne":"mario"}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index can satisfy both the selector and sort specified."}}},{"input":{"sort":["_id","series"],"selector":{"$and":[{"rank":{"$lt":3}},{"debut":{"$ne":1993}},{"_id":{"$lt":"fox"}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index exists for this sort, try indexing: _id, series"}}},{"input":{"sort":["debut"],"selector":{"$and":[{"debut":{"$lt":1992}},{"_id":{"$gt":"link"}},{"rank":{"$ne":5}},{"series":{"$lte":"mario"}}]}},"output":{"res":{"docs":["luigi","yoshi"]}}},{"input":{"sort":["debut","series"],"selector":{"$and":[{"_id":{"$gt":"kirby"}},{"rank":{"$lt":7}},{"_id":{"$lte":"fox"}},{"debut":{"$gt":1992}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index exists for this sort, try indexing: debut, series"}}},{"input":{"sort":["rank"],"selector":{"$and":[{"_id":{"$ne":"ness"}},{"rank":{"$eq":2}}]}},"output":{"res":{"docs":["kirby"]}}},{"input":{"sort":["rank"],"selector":{"$and":[{"debut":{"$gte":1986}},{"debut":{"$lte":1996}},{"name":{"$eq":"donkey kong"}},{"_id":{"$lt":"mario"}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index can satisfy both the selector and sort specified."}}},{"input":{"sort":["rank"],"selector":{"$and":[{"_id":{"$lt":"mario"}},{"name":{"$gte":"luigi"}},{"_id":{"$lt":"yoshi"}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index can satisfy both the selector and sort specified."}}},{"input":{"sort":["rank","debut","_id"],"selector":{"$and":[{"rank":{"$eq":12}},{"_id":{"$gt":"luigi"}},{"rank":{"$gt":7}},{"name":{"$gte":"jigglypuff"}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index exists for this sort, try indexing: rank, debut, _id"}}},{"input":{"sort":["series"],"selector":{"_id":{"$eq":"dk"}}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index can satisfy both the selector and sort specified."}}},{"input":{"sort":["name","debut","rank"],"selector":{"rank":{"$ne":8}}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"There is no operator in this selector can used with an index."}}},{"input":{"selector":{"$and":[{"rank":{"$lte":10}},{"name":{"$ne":"fox"}}]}},"output":{"res":{"docs":["pikachu","kirby","falcon","mario","yoshi","dk","puff","ness","link"]}}},{"input":{"sort":["rank","debut"],"selector":{"series":{"$ne":"kirby"}}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"There is no operator in this selector can used with an index."}}},{"input":{"sort":["_id","debut"],"selector":{"series":{"$lt":"metroid"}}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index exists for this sort, try indexing: _id, debut"}}},{"input":{"selector":{"$and":[{"series":{"$ne":"pokemon"}},{"name":{"$gte":"pikach"}},{"name":{"$gte":"captain falcon"}},{"name":{"$lte":"pikach"}}]}},"output":{"res":{"docs":[]}}},{"input":{"sort":["name"],"selector":{"$and":[{"_id":{"$gte":"samus"}},{"debut":{"$gte":1983}},{"debut":{"$ne":1981}},{"_id":{"$ne":"yoshi"}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index can satisfy both the selector and sort specified."}}},{"input":{"sort":["rank","name"],"selector":{"$and":[{"debut":{"$eq":1994}},{"series":{"$gt":"mario"}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index exists for this sort, try indexing: rank, name"}}},{"input":{"selector":{"$and":[{"_id":{"$lte":"fox"}},{"name":{"$ne":"luigi"}},{"series":{"$gte":"f-zero"}}]}},"output":{"res":{"docs":["dk","falcon","fox"]}}},{"input":{"sort":["name"],"selector":{"$and":[{"series":{"$ne":"pokemon"}},{"rank":{"$lte":3}},{"series":{"$gt":"mario"}},{"debut":{"$gte":1986}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index can satisfy both the selector and sort specified."}}},{"input":{"sort":["series"],"selector":{"debut":{"$lt":1996}}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index can satisfy both the selector and sort specified."}}},{"input":{"selector":{"$and":[{"_id":{"$ne":"samus"}},{"_id":{"$ne":"yoshi"}},{"_id":{"$gt":"fox"}}]}},"output":{"res":{"docs":["kirby","link","luigi","mario","ness","pikachu","puff"]}}},{"input":{"selector":{"$and":[{"_id":{"$gt":"yoshi"}},{"_id":{"$gte":"samus"}},{"rank":{"$lte":1}},{"name":{"$lt":"link"}}]}},"output":{"res":{"docs":[]}}},{"input":{"selector":{"_id":{"$ne":"fox"}}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"There is no operator in this selector can used with an index."}}},{"input":{"sort":["rank"],"selector":{"$and":[{"name":{"$ne":"ness"}},{"name":{"$lte":"samus"}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index can satisfy both the selector and sort specified."}}},{"input":{"sort":["_id","series"],"selector":{"$and":[{"name":{"$lte":"link"}},{"debut":{"$gt":1981}},{"debut":{"$ne":1981}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index exists for this sort, try indexing: _id, series"}}},{"input":{"sort":["rank"],"selector":{"$and":[{"rank":{"$lt":2}},{"debut":{"$lte":1986}},{"rank":{"$lt":10}}]}},"output":{"res":{"docs":[]}}},{"input":{"selector":{"$and":[{"series":{"$lt":"pokemon"}},{"debut":{"$lt":1986}},{"_id":{"$gt":"mario"}},{"_id":{"$ne":"luigi"}}]}},"output":{"res":{"docs":[]}}},{"input":{"sort":["_id","series"],"selector":{"$and":[{"series":{"$lte":"pokemon"}},{"debut":{"$gt":1990}},{"rank":{"$gt":10}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index exists for this sort, try indexing: _id, series"}}},{"input":{"sort":["_id"],"selector":{"$and":[{"debut":{"$lte":1990}},{"series":{"$eq":"pokemon"}},{"rank":{"$gte":6}},{"debut":{"$lte":1986}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index can satisfy both the selector and sort specified."}}},{"input":{"selector":{"name":{"$eq":"luigi"}}},"output":{"res":{"docs":["luigi"]}}},{"input":{"sort":["series"],"selector":{"$and":[{"rank":{"$gte":2}},{"name":{"$lt":"donkey kong"}},{"series":{"$eq":"mario"}}]}},"output":{"res":{"docs":[]}}},{"input":{"selector":{"$and":[{"_id":{"$gt":"ness"}},{"rank":{"$lt":10}}]}},"output":{"res":{"docs":["pikachu","puff","yoshi"]}}},{"input":{"selector":{"$and":[{"debut":{"$eq":1983}},{"_id":{"$gte":"falcon"}},{"debut":{"$gt":1990}},{"name":{"$eq":"pikach"}}]}},"output":{"err":{"status":500,"name":"function_clause","message":"Database encountered an unknown error","error":true,"reason":null}}},{"input":{"sort":["rank","_id"],"selector":{"$and":[{"name":{"$lt":"fox"}},{"series":{"$ne":"mario"}},{"_id":{"$ne":"mario"}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index exists for this sort, try indexing: rank, _id"}}},{"input":{"selector":{"rank":{"$lt":11}}},"output":{"res":{"docs":["pikachu","kirby","fox","falcon","mario","yoshi","dk","puff","ness","link"]}}},{"input":{"sort":["series","rank","name"],"selector":{"$and":[{"series":{"$gte":"pokemon"}},{"name":{"$eq":"captain falcon"}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index exists for this sort, try indexing: series, rank, name"}}},{"input":{"sort":["rank"],"selector":{"$and":[{"name":{"$gt":"kirby"}},{"series":{"$lt":"earthbound"}},{"series":{"$gte":"kirby"}},{"_id":{"$ne":"link"}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index can satisfy both the selector and sort specified."}}},{"input":{"sort":["_id"],"selector":{"$and":[{"name":{"$ne":"samus"}},{"rank":{"$ne":5}},{"rank":{"$gte":1}},{"name":{"$ne":"mario"}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index can satisfy both the selector and sort specified."}}},{"input":{"selector":{"$and":[{"_id":{"$gt":"ness"}},{"series":{"$lte":"mario"}},{"series":{"$ne":"metroid"}},{"rank":{"$lt":9}}]}},"output":{"res":{"docs":["yoshi"]}}},{"input":{"sort":["debut"],"selector":{"rank":{"$eq":11}}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index can satisfy both the selector and sort specified."}}},{"input":{"sort":["rank","series"],"selector":{"$and":[{"_id":{"$gt":"dk"}},{"_id":{"$gte":"yoshi"}},{"rank":{"$gt":5}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index exists for this sort, try indexing: rank, series"}}},{"input":{"selector":{"$and":[{"debut":{"$gt":1990}},{"_id":{"$gt":"yoshi"}}]}},"output":{"res":{"docs":[]}}},{"input":{"sort":["series","_id","rank"],"selector":{"$and":[{"debut":{"$ne":1993}},{"_id":{"$gte":"luigi"}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index exists for this sort, try indexing: series, _id, rank"}}},{"input":{"sort":["name","debut"],"selector":{"$and":[{"series":{"$gt":"mario"}},{"name":{"$ne":"kirby"}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index exists for this sort, try indexing: name, debut"}}},{"input":{"sort":["debut","_id"],"selector":{"$and":[{"rank":{"$gt":8}},{"_id":{"$lte":"pikach"}},{"rank":{"$eq":4}},{"_id":{"$lt":"samus"}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index exists for this sort, try indexing: debut, _id"}}},{"input":{"sort":["debut","rank","series"],"selector":{"$and":[{"series":{"$lt":"pokemon"}},{"rank":{"$lte":6}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index exists for this sort, try indexing: debut, rank, series"}}},{"input":{"sort":["series","name"],"selector":{"$and":[{"_id":{"$lte":"dk"}},{"series":{"$gt":"kirby"}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index exists for this sort, try indexing: series, name"}}},{"input":{"sort":["rank"],"selector":{"$and":[{"name":{"$lt":"luigi"}},{"debut":{"$gte":1996}},{"debut":{"$eq":1994}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index can satisfy both the selector and sort specified."}}},{"input":{"sort":["_id"],"selector":{"$and":[{"series":{"$ne":"earthbound"}},{"name":{"$eq":"donkey kong"}},{"name":{"$eq":"kirby"}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index can satisfy both the selector and sort specified."}}},{"input":{"selector":{"$and":[{"rank":{"$ne":6}},{"series":{"$gt":"metroid"}},{"rank":{"$ne":3}}]}},"output":{"res":{"docs":["pikachu","puff","link"]}}},{"input":{"sort":["name","series"],"selector":{"name":{"$lt":"ness"}}},"output":{"res":{"docs":["falcon","dk","fox","puff","kirby","link","luigi","mario"]}}},{"input":{"sort":["_id"],"selector":{"name":{"$lte":"jigglypuff"}}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index can satisfy both the selector and sort specified."}}},{"input":{"sort":["name","_id","debut"],"selector":{"$and":[{"_id":{"$eq":"fox"}},{"_id":{"$eq":"pikach"}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index exists for this sort, try indexing: name, _id, debut"}}},{"input":{"sort":["debut"],"selector":{"rank":{"$lt":4}}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index can satisfy both the selector and sort specified."}}},{"input":{"sort":["rank"],"selector":{"$and":[{"rank":{"$lt":5}},{"rank":{"$ne":1}},{"_id":{"$gte":"dk"}}]}},"output":{"res":{"docs":["kirby","fox","falcon"]}}},{"input":{"sort":["_id","debut"],"selector":{"$and":[{"name":{"$gte":"luigi"}},{"_id":{"$eq":"kirby"}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index exists for this sort, try indexing: _id, debut"}}},{"input":{"sort":["rank"],"selector":{"$and":[{"name":{"$ne":"captain falcon"}},{"_id":{"$ne":"link"}},{"name":{"$eq":"fox"}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index can satisfy both the selector and sort specified."}}},{"input":{"sort":["series"],"selector":{"$and":[{"debut":{"$gt":1996}},{"rank":{"$eq":7}},{"name":{"$ne":"ness"}},{"_id":{"$gt":"puff"}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index can satisfy both the selector and sort specified."}}},{"input":{"sort":["_id"],"selector":{"$and":[{"debut":{"$lt":1993}},{"_id":{"$ne":"puff"}},{"series":{"$ne":"pokemon"}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index can satisfy both the selector and sort specified."}}},{"input":{"sort":["rank","_id","series"],"selector":{"_id":{"$lte":"samus"}}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index exists for this sort, try indexing: rank, _id, series"}}},{"input":{"sort":["debut"],"selector":{"$and":[{"debut":{"$lt":1990}},{"series":{"$lte":"mario"}},{"_id":{"$lte":"mario"}}]}},"output":{"res":{"docs":["dk","mario","luigi"]}}},{"input":{"sort":["name","debut"],"selector":{"$and":[{"_id":{"$ne":"mario"}},{"series":{"$gt":"mario"}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index exists for this sort, try indexing: name, debut"}}},{"input":{"sort":["name"],"selector":{"$and":[{"rank":{"$lte":7}},{"series":{"$gte":"mario"}},{"debut":{"$gte":1981}},{"rank":{"$gte":5}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index can satisfy both the selector and sort specified."}}},{"input":{"selector":{"rank":{"$lt":8}}},"output":{"res":{"docs":["pikachu","kirby","fox","falcon","mario","yoshi","dk"]}}},{"input":{"sort":["debut","name","series"],"selector":{"$and":[{"debut":{"$gt":1996}},{"name":{"$lte":"luigi"}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index exists for this sort, try indexing: debut, name, series"}}},{"input":{"sort":["rank"],"selector":{"$and":[{"debut":{"$lte":1986}},{"name":{"$lte":"captain falcon"}},{"series":{"$lt":"earthbound"}},{"name":{"$gte":"samus"}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index can satisfy both the selector and sort specified."}}},{"input":{"sort":["debut"],"selector":{"$and":[{"debut":{"$gt":1981}},{"name":{"$gt":"mario"}}]}},"output":{"res":{"docs":["samus","yoshi","ness","pikachu"]}}},{"input":{"sort":["rank"],"selector":{"$and":[{"name":{"$lte":"donkey kong"}},{"series":{"$gt":"mario"}},{"name":{"$lt":"kirby"}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index can satisfy both the selector and sort specified."}}},{"input":{"sort":["_id","rank","debut"],"selector":{"$and":[{"_id":{"$lte":"samus"}},{"rank":{"$ne":11}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index exists for this sort, try indexing: _id, rank, debut"}}},{"input":{"sort":["rank","name"],"selector":{"$and":[{"_id":{"$eq":"pikach"}},{"rank":{"$gte":8}},{"_id":{"$gt":"falcon"}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index exists for this sort, try indexing: rank, name"}}},{"input":{"sort":["name"],"selector":{"debut":{"$gte":1986}}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index can satisfy both the selector and sort specified."}}},{"input":{"sort":["rank","debut"],"selector":{"$and":[{"_id":{"$gt":"pikach"}},{"debut":{"$gte":1994}},{"rank":{"$eq":5}}]}},"output":{"res":{"docs":[]}}},{"input":{"sort":["series","name"],"selector":{"$and":[{"_id":{"$lte":"dk"}},{"_id":{"$lt":"ness"}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index exists for this sort, try indexing: series, name"}}},{"input":{"sort":["rank","series","debut"],"selector":{"$and":[{"debut":{"$ne":1992}},{"rank":{"$eq":1}},{"_id":{"$ne":"pikach"}},{"_id":{"$gte":"falcon"}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index exists for this sort, try indexing: rank, series, debut"}}},{"input":{"sort":["series","debut"],"selector":{"_id":{"$ne":"ness"}}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"There is no operator in this selector can used with an index."}}},{"input":{"selector":{"name":{"$ne":"luigi"}}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"There is no operator in this selector can used with an index."}}},{"input":{"selector":{"$and":[{"rank":{"$lte":2}},{"_id":{"$ne":"luigi"}},{"debut":{"$lt":1992}},{"debut":{"$gte":1986}}]}},"output":{"res":{"docs":[]}}},{"input":{"sort":["debut"],"selector":{"debut":{"$lte":1993}}},"output":{"res":{"docs":["dk","mario","luigi","link","samus","falcon","yoshi","kirby","fox"]}}},{"input":{"sort":["debut","rank"],"selector":{"series":{"$gte":"mario"}}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index exists for this sort, try indexing: debut, rank"}}},{"input":{"sort":["_id","series"],"selector":{"$and":[{"name":{"$gt":"donkey kong"}},{"name":{"$gt":"samus"}},{"_id":{"$lt":"mario"}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index exists for this sort, try indexing: _id, series"}}},{"input":{"selector":{"$and":[{"_id":{"$lte":"mario"}},{"series":{"$ne":"pokemon"}},{"name":{"$lte":"link"}}]}},"output":{"res":{"docs":["dk","falcon","fox","kirby","link"]}}},{"input":{"sort":["_id","name","debut"],"selector":{"$and":[{"name":{"$gt":"ness"}},{"name":{"$lte":"yoshi"}},{"_id":{"$eq":"pikach"}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index exists for this sort, try indexing: _id, name, debut"}}},{"input":{"sort":["rank"],"selector":{"_id":{"$lte":"luigi"}}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index can satisfy both the selector and sort specified."}}},{"input":{"sort":["_id"],"selector":{"$and":[{"name":{"$lt":"luigi"}},{"_id":{"$ne":"link"}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index can satisfy both the selector and sort specified."}}},{"input":{"sort":["name"],"selector":{"$and":[{"rank":{"$lte":3}},{"rank":{"$eq":6}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index can satisfy both the selector and sort specified."}}},{"input":{"sort":["_id","name"],"selector":{"$and":[{"debut":{"$ne":1993}},{"_id":{"$gt":"yoshi"}},{"rank":{"$gt":6}},{"rank":{"$lte":2}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index exists for this sort, try indexing: _id, name"}}},{"input":{"sort":["debut"],"selector":{"series":{"$gt":"kirby"}}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index can satisfy both the selector and sort specified."}}},{"input":{"selector":{"_id":{"$eq":"dk"}}},"output":{"res":{"docs":["dk"]}}},{"input":{"sort":["_id"],"selector":{"$and":[{"name":{"$gte":"jigglypuff"}},{"name":{"$gt":"yoshi"}},{"name":{"$lt":"mario"}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index can satisfy both the selector and sort specified."}}},{"input":{"sort":["series","debut"],"selector":{"$and":[{"series":{"$ne":"mario"}},{"rank":{"$lte":2}},{"_id":{"$lte":"link"}},{"_id":{"$lte":"yoshi"}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index can satisfy both the selector and sort specified."}}},{"input":{"sort":["series"],"selector":{"$and":[{"rank":{"$lte":3}},{"rank":{"$lte":8}}]}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"No index can satisfy both the selector and sort specified."}}},{"input":{"selector":{"name":{"$ne":"fox"}}},"output":{"err":{"status":400,"name":"no_usable_index","message":"Database encountered an unknown error","error":true,"reason":"There is no operator in this selector can used with an index."}}},{"input":{"selector":{"$and":[{"series":{"$eq":"metroid"}},{"rank":{"$gte":12}},{"series":{"$gt":"pokemon"}},{"debut":{"$lte":1981}}]}},"output":{"res":{"docs":[]}}},{"input":{"selector":{"$and":[{"debut":{"$gte":1986}},{"rank":{"$ne":3}},{"name":{"$gt":"yoshi"}},{"series":{"$gt":"kirby"}}]}},"output":{"res":{"docs":[]}}},{"input":{"sort":["_id"],"selector":{"$and":[{"_id":{"$lt":"samus"}},{"name":{"$gt":"kirby"}}]}},"output":{"res":{"docs":["link","luigi","mario","ness","pikachu"]}}},{"input":{"sort":["debut"],"selector":{"$and":[{"_id":{"$lt":"yoshi"}},{"series":{"$eq":"pokemon"}},{"name":{"$gt":"ness"}},{"debut":{"$lt":1990}}]}},"output":{"res":{"docs":[]}}},{"input":{"selector":{"$and":[{"rank":{"$lte":4}},{"debut":{"$lt":1986}},{"rank":{"$lt":2}},{"_id":{"$lt":"ness"}}]}},"output":{"res":{"docs":[]}}},{"input":{"selector":{"$and":[{"_id":{"$lt":"dk"}},{"series":{"$lte":"mario"}}]}},"output":{"res":{"docs":[]}}},{"input":{"selector":{"$and":[{"debut":{"$lt":1990}},{"rank":{"$gte":10}},{"rank":{"$lte":9}}]}},"output":{"res":{"docs":[]}}}];

    /* jshint maxlen:100 */

    testConfigs.forEach(function (testConfig, i) {

      function kitchenSinkTest() {
        var db = context.db;
        var query = testConfig.input;
        query.fields = ['_id'];
        return db.find(query).then(function (res) {
          if (testConfig.output.res) {
            var ids = res.docs.map(function (x) {
              return x._id;
            });
            if (!testConfig.input.sort) {
              // no guaranteed sorting, so ignore order
              ids.sort();
              testConfig.output.res.docs.sort();
            }
            ids.should.deep.equal(testConfig.output.res.docs);
          } else {
            should.exist(res.warning, 'expected a warning');
            res.warning.should.equal('no matching index found, create an ' +
              'index to optimize query time');
          }
        }, function (err) {
          if (testConfig.output.res) {
            should.not.exist(err, 'should not have thrown an error');
          } else {
            should.exist(err);
          }
        });
      }

      var testName = 'kitchen sink test #' + humanizeNum(i);

      if (i === 0 || i === 43) {
        // bug in Cloudant
        testName += ', skipped due to https://issues.apache.org/jira/browse/COUCHDB-2614';
        it.skip(testName, kitchenSinkTest);
        return;
      }

      it(testName, kitchenSinkTest);

    });

    it('special kitchen sink test #s001', function () {
      return context.db.find({
        selector: {name: {"$gte":"Captain Falco","$lte":"captain falcon"}},
        fields: ['_id']
      }).then(function (res) {
        res.should.deep.equal({docs: [{_id: 'falcon'}]});
      });
    });
  });
};