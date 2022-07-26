
# Rut

library for validate or format chilean rut

## Install

```npm
npm install rut
```

# Usage

```
import { validateRut } from 'rut'

validateRut('111111111') // return true if rut is valid, or false if it is not 

```

```
import { formatRut } from 'rut

formatRut('111111111') // return formatted rut 11.111.111-1, if rut finish with k, it will be uppercase

```

```
import { cleanRut } from 'rut'

cleanRut('11.111.111-1') // return rut without dots and '-' 111111111

```

# Contributing
If someone wants to add or improve something, I invite you to collaborate directly in this repository: [rut](https://github.com/felipecaroca/rut)

# License
rut is released under the [MIT License](https://opensource.org/licenses/MIT).