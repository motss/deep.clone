// @ts-check

/** Import project dependencies */
import test from 'ava';
import deepClone, { deepCloneSync } from '../';

/** Setting up */
const towno = {
  a: {
    b: {
      c: {
        d: {
          e: [ 1, 2, 3 ],
          f: 'random-string',
          g: () => {},
          re: /haha/gi,
          createdAt: new Date(),
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
        w: () => {},
        re: /^hello\sworld/gi,
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
  try {
    const dc = await deepClone(owno);

    t.deepEqual(dc, owno);
  } catch (e) {
    t.fail(e);
  }
});

test('is truly deep clone an nested Object', async (t) => {
  try {
    const dc = await deepClone(owno);

    dc.a.b.c = {};
    dc.e = {};

    t.notDeepEqual(dc, owno);
  } catch (e) {
    t.fail(e);
  }
});

test('deeply clone an nested Array', async (t) => {
  try {
    const dc = await deepClone(awno);

    t.deepEqual(dc, awno);
  } catch (e) {
    t.fail(e);
  }
});

test('is deeply clone an nested Array', async (t) => {
  try {
    const dc = await deepClone(awno);

    dc[0][0][0].a = {};

    t.notDeepEqual(dc, awno);
  } catch (e) {
    t.fail(e);
  }
});

test('deeply clone a non-nested Object', async (t) => {
  try {
    const shallowObj = {
      a: 'shallow-string',
      b: [ 1, 2, 3 ],
      c: 999,
      d: null,
    };
    const dc = await deepClone(shallowObj);

    t.deepEqual(dc, shallowObj);
  } catch (e) {
    t.fail(e);
  }
});

test('is turly deep clone a non-nested Object', async (t) => {
  try {
    const shallowObj = {
      a: 'shallow-string',
      b: [ 1, 2, 3 ],
      c: 999,
      d: null,
    };
    const dc = await deepClone(shallowObj);

    delete dc.a;
    delete dc.b;
    delete dc.c;
    delete dc.d;

    t.notDeepEqual(dc, shallowObj);
  } catch (e) {
    t.fail(e);
  }
});

test('deeply clone a non-nested Array', async (t) => {
  try {
    const shallowArr = [
      null, 1, 2, { a: 1 }, 'shallow-string',
    ];
    const dc = await deepClone(shallowArr);

    t.deepEqual(dc, shallowArr);
  } catch (e) {
    t.fail(e);
  }
});

test('deeply clone a non-nested Array', async (t) => {
  try {
    const shallowArr = [
      null, 1, 2, { a: 1 }, 'shallow-string',
    ];
    const dc = await deepClone(shallowArr);

    t.deepEqual(dc, shallowArr);
  } catch (e) {
    t.fail(e);
  }
});

test('is truly deep clone a non-nested Array', async (t) => {
  try {
    const shallowArr = [
      null, 1, 2, { a: 1 }, 'shallow-string',
    ];
    const dc = await deepClone(shallowArr);

    dc[3] = {};

    t.notDeepEqual(dc, shallowArr);
  } catch (e) {
    t.fail(e);
  }
});

test('deeply clone a String', async (t) => {
  try {
    const str = 'just a string';
    const dc = await deepClone(str);

    t.is(str, dc);
  } catch (e) {
    t.fail(e);
  }
});

test('deeply clone a Number', async (t) => {
  try {
    const num = 999;
    const dc = await deepClone(num);

    t.is(num, dc);
  } catch (e) {
    t.fail(e);
  }
});

test('deeply clone a Null', async (t) => {
  try {
    const nu = null;
    const dc = await deepClone(nu);

    t.is(nu, dc);
  } catch (e) {
    t.fail(e);
  }
});

test('deeply clone a Boolean', async (t) => {
  try {
    const bo = !0;
    const dc = await deepClone(bo);

    t.is(bo, dc);
  } catch (e) {
    t.fail(e);
  }
});

test('deeply clone a Undefined', async (t) => {
  try {
    const un = undefined;
    await deepClone(un);

    t.fail();
  } catch (e) {
    t.true(e instanceof TypeError);
    t.is(e.message, 'target is undefined');
  }
});

test('enable absolute flag to deeply clone nested objects with special cloning treatment needed objects', async (t) => {
  try {
    const dc = await deepClone(towno, { absolute: true });

    t.deepEqual(dc, towno);
  } catch (e) {
    t.fail(e);
  }
});

test('is truly deep clone nested objects with special cloning treatment needed objects when absolute flag is enabled', async (t) => {
  try {
    const dc = await deepClone(towno, { absolute: true });

    dc.a.b = {};

    t.notDeepEqual(dc, towno);
  } catch (e) {
    t.fail(e);
  }
});

test('sync deep cloning', async (t) => {
  try {
    const dc = deepCloneSync(owno);

    t.deepEqual(dc, owno);
  } catch (e) {
    t.fail(e);
  }
});

test('sync deep cloning with absolute flag', async (t) => {
  try {
    const dc = deepCloneSync(towno, { absolute: true });

    t.deepEqual(dc, towno);
  } catch (e) {
    t.fail(e);
  }
});
