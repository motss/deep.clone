import deepClone, { deepCloneSync } from '..';

const towno = {
  a: {
    b: {
      c: {
        d: {
          e: [1, 2, 3],
          f: 'random-string',
          g: () => null,
          re: /haha/gi,
          createdAt: new Date(),
        },
      },
    },
    j: 999,
    k: [
      {
        l: {
          m: {
            n: 0,
          },
        },
      }, {
        o: 999,
      }, {
        p: [
          {
            q: 999,
            r: [
              {
                s: {
                  t: {
                    u: 'deep-string',
                  },
                },
              }, {
                v: null,
              },
            ],
          }, {
            w: () => null,
            re: /^hello\sworld/gi,
          }, {
            x: {
              y: {
                z: [1, 2],
              },
            },
          },
        ],
      },
    ],
  },
  h: [1, 2],
  i: 'random-string-depth-0',
};
const owno = {
  a: {
    b: {
      c: {
        d: [1, 2, 3],
      },
    },
    e: {
      f: 111,
      g: 'deep-string',
      h: [
        { i: 999 },
        {
          j: [{
            k: {
              l: 'deep-string',
            },
          }],
        }],
    },
    m: null,
  },
  n: 999,
};
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
                    d: 999,
                  },
                ],
              ],
            },
          ],
        },
        e: [
          [1, 2, 3],
        ],
      },
    ], 'deep-string', 1, 2,
  ], null, 'deep-string', [1, 2],
];

describe('deep.clone', () => {
  describe('ok', () => {
    test('deeply clone an nested Object', async () => {
      try {
        const dc = await deepClone(owno);

        expect(dc).toStrictEqual(owno);
      } catch (e) {
        throw e;
      }
    });

    test('is truly deep clone an nested Object', async () => {
      try {
        const dc = await deepClone(owno);

        dc.a.b.c = {};
        dc.e = {};

        expect(dc).not.toStrictEqual(owno);
      } catch (e) {
        throw e;
      }
    });

    test('deeply clone an nested Array', async () => {
      try {
        const dc = await deepClone(awno);

        expect(dc).toStrictEqual(awno);
      } catch (e) {
        throw e;
      }
    });

    test('is deeply clone an nested Array', async () => {
      try {
        const dc = await deepClone(awno);

        dc[0][0][0].a = {};

        expect(dc).not.toStrictEqual(awno);
      } catch (e) {
        throw e;
      }
    });

    test('deeply clone a non-nested Object', async () => {
      try {
        const shallowObj = {
          a: 'shallow-string',
          b: [1, 2, 3],
          c: 999,
          d: null,
        };
        const dc = await deepClone(shallowObj);

        expect(dc).toStrictEqual(shallowObj);
      } catch (e) {
        throw e;
      }
    });

    test('is turly deep clone a non-nested Object', async () => {
      try {
        const shallowObj = {
          a: 'shallow-string',
          b: [1, 2, 3],
          c: 999,
          d: null,
        };
        const dc = await deepClone(shallowObj);

        delete dc.a;
        delete dc.b;
        delete dc.c;
        delete dc.d;

        expect(dc).not.toStrictEqual(shallowObj);
      } catch (e) {
        throw e;
      }
    });

    test('deeply clone a non-nested Array', async () => {
      try {
        const shallowArr = [
          null, 1, 2, { a: 1 }, 'shallow-string',
        ];
        const dc = await deepClone(shallowArr);

        expect(dc).toStrictEqual(shallowArr);
      } catch (e) {
        throw e;
      }
    });

    test('deeply clone a non-nested Array', async () => {
      try {
        const shallowArr = [
          null, 1, 2, { a: 1 }, 'shallow-string',
        ];
        const dc = await deepClone(shallowArr);

        expect(dc).toStrictEqual(shallowArr);
      } catch (e) {
        throw e;
      }
    });

    test('is truly deep clone a non-nested Array', async () => {
      try {
        const shallowArr = [
          null, 1, 2, { a: 1 }, 'shallow-string',
        ];
        const dc = await deepClone(shallowArr);

        dc[3] = {};

        expect(dc).not.toStrictEqual(shallowArr);
      } catch (e) {
        throw e;
      }
    });

    test('deeply clone a String', async () => {
      try {
        const str = 'just a string';
        const dc = await deepClone(str);

        expect(str).toStrictEqual(dc);
      } catch (e) {
        throw e;
      }
    });

    test('deeply clone a Number', async () => {
      try {
        const num = 999;
        const dc = await deepClone(num);

        expect(num).toStrictEqual(dc);
      } catch (e) {
        throw e;
      }
    });

    test('deeply clone a Boolean', async () => {
      try {
        const bo = !0;
        const dc = await deepClone(bo);

        expect(bo).toStrictEqual(dc);
      } catch (e) {
        throw e;
      }
    });

    test(`deep cloning with 'absolute: true'`, async () => {
      try {
        const dc = await deepClone(towno, { absolute: true });

        expect(dc).toStrictEqual(towno);
      } catch (e) {
        throw e;
      }
    });

    test(`deep cloning with 'absolute: true' before mutating cloned object`, async () => {
      try {
        const dc = await deepClone(towno, { absolute: true });

        dc.a.b = {};

        expect(dc).not.toStrictEqual(towno);
      } catch (e) {
        throw e;
      }
    });

    test('sync deep cloning', async () => {
      try {
        const dc = deepCloneSync(owno);

        expect(dc).toStrictEqual(owno);
      } catch (e) {
        throw e;
      }
    });

    test('sync deep cloning with absolute flag', async () => {
      try {
        const dc = deepCloneSync(towno, { absolute: true });

        expect(dc).toStrictEqual(towno);
      } catch (e) {
        throw e;
      }
    });
  });

  describe('error', () => {
    test('throws when deeply clone a Null', async () => {
      try {
        const nu = null;
        await deepClone(nu);
      } catch (e) {
        expect(e).toStrictEqual(new TypeError(`'target' is not defined`));
      }
    });

    test('throws when deeply clone a Undefined', async () => {
      try {
        const un = undefined;
        await deepClone(un);
      } catch (e) {
        expect(e).toStrictEqual(new TypeError(`'target' is not defined`));
      }
    });
  });

});
