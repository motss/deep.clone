// @ts-check

const { test } = require('ava');
const deepClone = require('../src');

const towno = {
  a: {
    b: {
      c: {
        d: {
          e: [ 1, 2, 3 ],
          f: 'random-string',
          g: () => {},
        }
      }
    },
    j: 999,
    k: [
     {
      l: {
       m: {
        n: 0
       }
      }
     }, {
      o: 999
     }, {
      p: [
       {
        q: 999,
        r: [
         {
          s: {
            t: {
             u: 'deep-string'
            }
          }
         }, {
          v: null
         }
        ]
       }, {
        w: () => {}
       }, {
        x: {
         y: {
           z: [ 1, 2, ]
         }
        }
       }
      ]
     }
    ],
  },
  h: [ 1, 2 ],
  i: 'random-string-depth-0',
};
const owno = {
  a: {
    b: {
      c: {
        d: [ 1, 2, 3 ],
      }
    },
    e: {
      f: 111,
      g: 'deep-string',
      h: [
        { i: 999 },
        { j: [ {
          k: {
            l: 'deep-string',
          }
        } ]
      } ]
    },
    m: null,
  },
  n: 999
}
const awno = [
  [
    [
      {
        a: {
          b: [
            {
              c: [
                [
                  {
                    d: 999
                  }
                ]
              ]
            }
          ],
        },
        e: [
          [ 1, 2, 3 ]
        ]
      }
    ], 'deep-string', 1, 2,
  ], null, 'deep-string', [ 1, 2 ],
]

test('deeply clone an nested Object', async (t) => {
  const dc = deepClone(owno);

  await t.deepEqual(dc, owno);
});

test('is truly deep clone an nested Object', async (t) => {
  const dc = deepClone(owno);

  dc.a.b.c = {};
  dc.e = {};

  await t.notDeepEqual(dc, owno);
});

test('deeply clone an nested Array', async (t) => {
  const dc = deepClone(awno);

  await t.deepEqual(dc, awno);
});

test('is deeply clone an nested Array', async (t) => {
  const dc = deepClone(awno);

  dc[0][0][0].a = {};

  await t.notDeepEqual(dc, awno);
});

test('deeply clone a non-nested Object', async (t) => {
  const shallowObj = {
    a: 'shallow-string',
    b: [ 1, 2, 3 ],
    c: 999,
    d: null,
  };
  const dc = deepClone(shallowObj);

  await t.deepEqual(dc, shallowObj);
});

test('is turly deep clone a non-nested Object', async (t) => {
  const shallowObj = {
    a: 'shallow-string',
    b: [ 1, 2, 3 ],
    c: 999,
    d: null,
  };
  const dc = deepClone(shallowObj);

  delete dc.a;
  delete dc.b;
  delete dc.c;
  delete dc.d;

  await t.notDeepEqual(dc, shallowObj);
});

test('deeply clone a non-nested Array', async (t) => {
  const shallowArr = [
    null, 1, 2, { a: 1 }, 'shallow-string',
  ];
  const dc = deepClone(shallowArr);

  await t.deepEqual(dc, shallowArr);
});

test('deeply clone a non-nested Array', async (t) => {
  const shallowArr = [
    null, 1, 2, { a: 1 }, 'shallow-string',
  ];
  const dc = deepClone(shallowArr);

  await t.deepEqual(dc, shallowArr);
});

test('is truly deep clone a non-nested Array', async (t) => {
  const shallowArr = [
    null, 1, 2, { a: 1 }, 'shallow-string',
  ];
  const dc = deepClone(shallowArr);

  dc[3] = {};

  await t.notDeepEqual(dc, shallowArr);
});

test('deeply clone a String', async (t) => {
  const str = 'just a string';
  const dc = deepClone(str);

  await t.is(str, dc);
});

test('deeply clone a Number', async (t) => {
  const num = 999;
  const dc = deepClone(num);

  await t.is(num, dc);
});

test('deeply clone a Null', async (t) => {
  const nu = null;
  const dc = deepClone(nu);

  await t.is(nu, dc);
});

test('deeply clone a Boolean', async (t) => {
  const bo = !0;
  const dc = deepClone(bo);

  await t.is(bo, dc);
});

test('deeply clone a Undefined', async (t) => {
  const un = undefined;
  const err = await t.throws(() => deepClone(un), TypeError);

  await t.is(err.message, 'target can NOT be undefined');
});

test('enable absolute flag to deeply clone nested objects with special cloning treatment needed objects', async (t) => {
  const dc = deepClone(towno, { absolute: true });

  await t.deepEqual(dc, towno);
});

test('is truly deep clone nested objects with special cloning treatment needed objects when absolute flag is enabled', async (t) => {
  const dc = deepClone(towno, { absolute: true });

  dc.a.b = {};

  await t.notDeepEqual(dc, towno);
});
