export function ValidateV2(params: any, value: any) {
  const node = document.querySelector('[name="password"]') as HTMLInputElement;
  if (params.required.req && value.trim() === '') {
    return [true, params.required.message];
  }
  if (params?.config) {
    for (let prop of Object.keys(params.config)) {
      if (prop === 'minLength' && params.config[prop].value > value.length) {
        return [true, params.config[prop].message];
      }

      if (prop === 'repeat' && node.value !== value) return [true, params.config[prop].message];
      if (prop === 'email' && !params.config[prop].value.test(value))
        return [true, params.config[prop].message];
    }
  }
  return [false, ''];
}
