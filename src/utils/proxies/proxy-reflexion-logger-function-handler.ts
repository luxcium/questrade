export class ProxyReflexionLoggerFunctionHandler<T extends Function = any>
  implements ProxyHandler<T> {
  getPrototypeOf(target: T): object | null {
    console.log('PROXY:', 'getPrototypeOf', 'target:', target); // CONSOLE: List the side effects
    return Reflect.getPrototypeOf(target);
  }

  setPrototypeOf(target: T, v: any): boolean {
    console.log('PROXY:', 'setPrototypeOf', 'target', target, 'v', v); // CONSOLE: List the side effects
    return Reflect.setPrototypeOf(target, v);
  }

  isExtensible(target: T): boolean {
    console.log('PROXY:', 'isExtensible', 'target', target); // CONSOLE: List the side effects
    return Reflect.isExtensible(target);
  }

  preventExtensions(target: T): boolean {
    console.log('PROXY:', 'preventExtensions', 'target', target); // CONSOLE: List the side effects
    return Reflect.preventExtensions(target);
  }

  getOwnPropertyDescriptor(
    target: T,
    p: PropertyKey,
  ): PropertyDescriptor | undefined {
    console.log('PROXY:', 'getOwnPropertyDescriptor', 'target', target, 'p', p); // CONSOLE: List the side effects
    return Reflect.getOwnPropertyDescriptor(target, p);
  }

  has(target: T, p: PropertyKey): boolean {
    console.log('PROXY:', 'has', 'target', target, 'p', p); // CONSOLE: List the side effects
    return Reflect.has(target, p);
  }

  get(target: T, p: PropertyKey, receiver: any): any {
    console.log(
      'PROXY:',
      'get',
      'target',
      target,
      'p',
      p,
      'receiver',
      receiver,
    ); // CONSOLE: List the side effects

    return Reflect.get(target, p, receiver);
  }

  set(target: T, p: PropertyKey, value: any, receiver: any): boolean {
    console.log(
      'PROXY:',
      'set',
      'target',
      target,
      'p',
      p,
      'value',
      value,
      'receiver',
      receiver,
    ); // CONSOLE: List the side effects

    return Reflect.set(target, p, value, receiver);
  }

  deleteProperty(target: T, p: PropertyKey): boolean {
    console.log('PROXY:', 'deleteProperty', 'target', target, 'p', p); // CONSOLE: List the side effects
    return Reflect.deleteProperty(target, p);
  }

  defineProperty(
    target: T,
    p: PropertyKey,
    attributes: PropertyDescriptor,
  ): boolean {
    console.log(
      'PROXY:',
      'defineProperty',
      'target',
      target,
      'p',
      p,
      'attributes',
      attributes,
    ); // CONSOLE: List the side effects

    return Reflect.defineProperty(target, p, attributes);
  }

  ownKeys(target: T): PropertyKey[] {
    console.log('PROXY:', 'ownKeys', 'target', target); // CONSOLE: List the side effects
    return Reflect.ownKeys(target);
  }

  apply(target: T, thisArg: any, argArray?: any): any {
    console.log(
      'PROXY:',
      'apply',
      'target',
      target,
      'thisArg',
      thisArg,
      'argArray',
      argArray,
    ); // CONSOLE: List the side effects

    return Reflect.apply(target, thisArg, argArray);
  }

  construct(target: T, argArray: any, newTarget: any): object {
    console.log(
      'PROXY:',
      'construct',
      'target',
      target,
      'argArray',
      argArray,
      'newTarget',
      newTarget,
    ); // CONSOLE: List the side effects
    return Reflect.construct(target, argArray, newTarget);
  }
}

/*


  + Terminologie

  # gestionnaire (handler)
  Un objet qui contient les trappes qui intercepteront les opérations.

  # trappes
  Les méthodes qui fournissent l'accès aux propriétés. Ce concept est analogue
  aux trappes utilisées dans les systèmes d'exploitations.

  # cible
  L'objet virtualisé par le proxy. Il est souvent utilisé comme objet de
  stockage. Les invariants (c'est-à-dire les éléments de sémantique qui restent
  inchangés) relatifs à la non-extensibilité et au caractère non-configurable
  des propriétés sont vérifiés par rapport à la cible.

  +Syntaxe
  * var p = new Proxy(cible, gestionnaire);

  + Paramètres

  # cible
  Une cible (qui peut être n'importe quel objet, un tableau, une fonction,
  ou même un autre proxy) qu'on souhaite envelopper dans un Proxy.

  # gestionnaire
  Un objet dont les propriétés sont des fonctions qui définissent le
  comportement du proxy lorsqu'on utilise une opération sur celui-ci.

  +Méthodes
  $> Permet de créer un objet Proxy révocable:
  |> Proxy.revocable()

  +Méthodes pour le gestionnaire
  L'objet utilisé comme gestionnaire regroupe les différentes fonctions
  « trappes » pour le Proxy.

  Toutes ces trappes sont optionnelles. Si une trappe n'a pas été définie,
  le comportement par défaut sera de transmettre l'opération à la cible.


  $> Une trappe pour Object.getPrototypeOf:
  |> handler.getPrototypeOf()

  $> Une trappe pour Object.setPrototypeOf:
  |> handler.setPrototypeOf()

  $> Une trappe pour Object.isExtensible:
  |> handler.isExtensible()

  $> Une trappe pour Object.preventExtensions:
  |> handler.preventExtensions()

  $> Une trappe pour Object.getOwnPropertyDescriptor:
  |> handler.getOwnPropertyDescriptor()

  $> Une trappe pour Object.defineProperty:
  |> handler.defineProperty()

  $> Une trappe pour l'opérateur in:
  |> handler.has()

  $> Une trappe pour l'accès aux valeurs des propriétés:
  |> handler.get()

  $> Une trappe pour la définition des valeurs des propriétés:
  |> handler.set()

  $> Une trappe pour l'opérateur delete:
  |> handler.deleteProperty()

  $> Une trappe pour Object.getOwnPropertyNames et Object.getOwnPropertySymbols:
  |> handler.ownKeys()

  $> Une trappe pour l'appel d'une fonction:
  |> handler.apply()

  $> Une trappe pour l'opérateur new:
  |> handler.construct()

  Certaines trappes non standards sont désormais obsolètes et ont été supprimées.



*/