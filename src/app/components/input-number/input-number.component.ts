import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css']
})
export class InputNumberComponent implements OnInit {
  @Output() open: EventEmitter<string> = new EventEmitter();
  num: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  getFactors(num: number) {
    if(num === 1) {
      this.open.emit('1');
      return;
    }

    console.log("in here");
    let MAXN = 100001;
     // stores smallest prime factor for every number
    let spf= new Array(MAXN);

    // Calculating SPF (Smallest Prime Factor) for every
    // number till MAXN.
    // Time Complexity : O(nloglogn)
    function sieve()
    {
        spf[1] = 1;
        for (let i=2; i<MAXN; i++)

            // marking smallest prime factor for every
            // number to be itself.
            spf[i] = i;

        // separately marking spf for every even
        // number as 2
        for (let i=4; i<MAXN; i+=2)
            spf[i] = 2;

        for (let i=3; i*i<MAXN; i++)
        {
            // checking if i is prime
            if (spf[i] == i)
            {
                // marking SPF for all numbers divisible by i
                for (let j=i*i; j<MAXN; j+=i)

                    // marking spf[j] if it is not
                    // previously marked
                    if (spf[j]==j)
                        spf[j] = i;
            }
        }
    }

    // A O(log n) function returning primefactorization
    // by dividing by smallest prime factor at every step
    function getFactorization(x: number)
    {
        let ret =[];
        while (x != 1)
        {
            ret.push(spf[x]);
            x = Math.floor(x / spf[x]);
        }
        return ret;
    }

    // Driver method

    // precalculating Smallest Prime Factor
    sieve();
    // document.write("prime factorization for " + x + " : ");
    // calling getFactorization function
    let  p = getFactorization(num);
    let emitted: string = '';
    for (let i=0; i<p.length; i++) {
      emitted += p[i] + ' ';
      console.log(emitted);
      // document.write(p[i] + " ");
    }
    console.log("about to emit")
    this.open.emit(emitted);
    // This code is contributed by unknown2108
  }

}
