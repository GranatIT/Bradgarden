/**
 * @param  {Array}	master	Inventory pieces, lengths that are available to be cut.
 * @param  {Array}	cuts 	An array of lengths that were requested.
 * @param  {Array}	set		A set of cuts pertaining to a given master.
 */
function branch(master, cuts, set) {
	const goods = cuts.filter((cut) => cut < master);
     //goods = array_filter(cuts, function(v) use (master) { return v <= master;});
     res = [...master, ...set, ...cuts];
     if (goods.length < 1){
         return res;
     }
     remaining = array_diff(cuts, goods);
     //foreach(goods as k => good){
     goods.map((good, index) => {
         set.push(good);
         for (i = 0; i < index; i++) {
         	remaining.push(goods.pop());
            // array_push(remaining,array_shift(goods));
         }
         // array_shift(goods);
         set = branch(master - good, goods, set);
         remaining.map(() => {set.push()})
         array_walk(remaining, function(index,v) use (set) {array_push(set[2], v);});
         if (set[0] == 0) return set;
         if (set[0] < res[0])
             res = set;
     })
     // }
     return res;
}