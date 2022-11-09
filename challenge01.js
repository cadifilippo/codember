const KEYS = ['usr', 'eme', 'psw', 'age', 'loc', 'fll'];

export async function challenge01() {
  const response = await fetch('https://codember.dev/users.txt');
  const text = await response.text();
  const aux = text.split('\n\n').map(obj => obj.replace(/\n/g, ' '));

  let arrUs = [];
  aux.forEach(user => {
    const userArr = user.split(' ');
    if (userArr.length > 1) {
      const obj = Object.fromEntries(new Map(userArr.map(us => us.split(':'))));
      arrUs.push(obj);
    }
  });

  const final = arrUs.filter(user => {
    const objK = Object.keys(user);
    return KEYS.filter(k => !objK.includes(k)).length === 0;
  });

  const count = final.length;
  console.log(`submit ${count}${final[count - 1].usr}`);
}
