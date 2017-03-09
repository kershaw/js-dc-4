/*
Warm up

2,520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

*/

// for (i = 0; i <=20 ; i++) {
//   // if (j = 0; j <=20 ;) {
//   //     i % j === 0;
//   //     j++;
//   };
// }
// console.log(i)
//
// // for (var i=1; i>0; i++) {
// //   if (i % 1 === 0 &&
// //     i % 2 === 0 &&
// //     i % 3 === 0 &&
// //     i % 4  === 0 &&
// //
// //
// // break
// //   )
// // }
// // console.log(i)


List<int> Factors(int n)
{
    List<int> list = new List<int>();
    int i=2;
    while(i<=n)
    {
        if (n % i == 0)
        {
            list.Add(i);
            n /= i;
        }
        else
            i++;
    }
    return list;
}

int  Calc(int n)
{
    var factors = Enumerable.Range(2, n-1).Select(j => Factors(j)).ToList();

    int i = 2;
    int res = 1;
    while (i <= n)
    {
        if (factors.Count(l => l.Contains(i)) > 1)
        {
            factors.ForEach(l => l.Remove(i));
            res *= i;
        }
        else
            i++;
    }

    return res * factors.SelectMany(x => x).Aggregate((s, j) => s *= j);
}
