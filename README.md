# barbershop-project-backend
REST API on:

<a href="https://expressjs.com/">
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" />
</a>

<a href="https://de.wikipedia.org/wiki/JavaScript">
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=yellow" />
</a>

<a href="https://nodejs.org/">
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
</a>

<a href="https://www.mongodb.com/">
  <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" />
</a>

<a href="https://www.mongodb.com/atlas">
  <img src="https://img.shields.io/badge/Atlas-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" />
</a>

#### Services
<details>
 <summary><code>GET</code> <code><b>/services</b></code> <code>(receive all available barbershop services)</code></summary>
  
##### Parameters

> | name             |  type     | data type      | description                         |
> |------------------|-----------|----------------|-------------------------------------|
> | None             |  required | N/A            | N/A                                 |

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`                | object (JSON)                                                       |
> | <b>TO DO</b> `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            | 
</details>

#### Barbers, specific appointmens and available timeslots

<details>
 <summary><code>GET</code> <code><b>/barbers</b></code> <code>(receive all barbers regardless of location)</code></summary>
  
##### Parameters

> | name             |  type     | data type      | description                         |
> |------------------|-----------|----------------|-------------------------------------|
> | None             |  required | object (JSON)  | N/A                                 |

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`                | object (JSON)                                                       |
> | <b>TO DO</b> `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            | 
</details>

<details>
 <summary><code>GET</code> <code><b>/barbers/:barbersId</b></code> <code>(gets one barber information by {barbersId})</code></summary>
  
##### Parameters

> | name             |  type     | data type      | description                         |
> |------------------|-----------|----------------|-------------------------------------|
> | {barbersId}      |  required | string         | Specific MongoDB id of a barber     |

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`                | object (JSON)                                                       |
> | <b>TO DO</b> `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |
>
> </details>

<details>
 <summary><code>GET</code> <code><b>/barbers/:barbersId/working_hours</b></code> <code>(gets working hours of one barber by {barbersId})</code></summary>
  
##### Parameters

> | name             |  type     | data type      | description                         |
> |------------------|-----------|----------------|-------------------------------------|
> | {barbersId}      |  required | string         | Specific MongoDB id of a barber     |

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`                | object (JSON)                                                       |
> | <b>TO DO</b> `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |
>
> </details>

<details>
 <summary><code>GET</code> <code><b>/barbers/:barbersId/working_hours/:day</b></code> <code>(gets working hours of one barber on specific day of the week by {barbersId} and {day})</code></summary>
  
##### Parameters

> | name             |  type     | data type      | description                         |
> |------------------|-----------|----------------|-------------------------------------|
> | {barbersId}      |  required | string         | Specific MongoDB id of a barber     |
> | {day}            |  required | string         | monday/tuesday/wednesday/etc...     |

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`                | object (JSON)                                                       |
> | <b>TO DO</b> `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |
>
> </details>

<details>
 <summary><code>GET</code> <code><b>/barbers/:barbersId/appointments</b></code> <code>(gets all appointments of one barber by {barbersId})</code></summary>
  
##### Parameters

> | name             |  type     | data type      | description                         |
> |------------------|-----------|----------------|-------------------------------------|
> | {barbersId}      |  required | string         | Specific MongoDB id of a barber     |

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`                | object (JSON)                                                       |
> | <b>TO DO</b> `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |
>
> </details>

<details>
 <summary><code>GET</code> <code><b>/barbers/:barberId/timeslots/:day/:month/:year</b></code> <code>(gets free timeslots of a barber on a specific day)</code></summary>
  
##### Parameters

> | name             |  type     | data type      | description                         |
> |------------------|-----------|----------------|-------------------------------------|
> | {barbersId}      |  required | string         | Specific MongoDB id of a barber     |
> | {day}            |  required | number         | 1, 2, 3, ...15, 16, ...30, 31       |
> | {month}          |  required | number         | 1, 2, 3, ...10, 11, 12              |
> | {year}           |  required | number         | Full year, ex. 2023                 |

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`                | object (JSON)                                                       |
> | <b>TO DO</b> `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |
>
> </details>

#### Barbershops, their information and working staff

<details>
 <summary><code>GET</code> <code><b>/barbershops/</b></code> <code>(gets all barbershops)</code></summary>
  
##### Parameters

> | name             |  type     | data type      | description                         |
> |------------------|-----------|----------------|-------------------------------------|
> | None             |  required | N/A            | N/A                                 |

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`                | object (JSON)                                                       |
> | <b>TO DO</b> `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |
>
> </details>

<details>
 <summary><code>GET</code> <code><b>/barbershops/:barbershopId</b></code> <code>(gets information of one barbershop by {barbershopId})</code></summary>
  
##### Parameters

> | name             |  type     | data type      | description                         |
> |------------------|-----------|----------------|-------------------------------------|
> | {barbershopId}   |  required | string         | Specific MongoDB id of a barbershop |

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`                | object (JSON)                                                       |
> | <b>TO DO</b> `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |
>
> </details>

<details>
 <summary><code>GET</code> <code><b>/barbershops/:barbershopId/barbers</b></code> <code>(gets all barbers working in specified barbershop by {barbershopId})</code></summary>
  
##### Parameters

> | name             |  type     | data type      | description                         |
> |------------------|-----------|----------------|-------------------------------------|
> | {barbershopId}   |  required | string         | Specific MongoDB id of a barbershop |

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`                | object (JSON)                                                       |
> | <b>TO DO</b> `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |
>
> </details>

#### Appointments

<details>
 <summary><code>GET</code> <code><b>/appointments</b></code> <code>(gets information about all appointments)</code></summary>
  
##### Parameters

> | name             |  type     | data type      | description                         |
> |------------------|-----------|----------------|-------------------------------------|
> | None             |  required | N/A            | N/A                                 |

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`                | object (JSON)                                                       |
> | <b>TO DO</b> `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |
>
> </details>

<details>
 <summary><code>POST</code> <code><b>/appointments</b></code> <code>(creates a new appointment by sending MongoDB appointment model in body)</code></summary>
  
##### Body

> | name             |  type     | data type      | description                         |
> |------------------|-----------|----------------|-------------------------------------|
> | form_info        |  required | Object(JSON)   | Object containing customer_id, date, timeslot, location, barber, services, status          |

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`                | object (JSON)                                                       |
> | <b>TO DO</b> `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |
>
> </details>

<details>
 <summary><code>GET</code> <code><b>/appointments/:appointmentId</b></code> <code>(gets an appointment by {appointmentId})</code></summary>
  
##### Body

> | name             |  type     | data type      | description                              |
> |------------------|-----------|----------------|------------------------------------------|
> | {appointmentId}  |  required | String         | Specific MongoDB id of an appointment    |

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`                | object (JSON)                                                       |
> | <b>TO DO</b> `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |
>
> </details>

<details>
 <summary><code>PUT</code> <code><b>/appointments/:appointmentId</b></code> <code>(edit an appointment by {appointmentId})</code></summary>
  
##### Body

> | name             |  type     | data type      | description                              |
> |------------------|-----------|----------------|------------------------------------------|
> | {appointmentId}  |  required | String         | Specific MongoDB id of an appointment    |

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`                | object (JSON)                                                       |
> | <b>TO DO</b> `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |
>
> </details>

<details>
 <summary><code>DELETE</code> <code><b>/appointments/:appointmentId</b></code> <code>(delete an appointment by {appointmentId})</code></summary>
  
##### Body

> | name             |  type     | data type      | description                              |
> |------------------|-----------|----------------|------------------------------------------|
> | {appointmentId}  |  required | String         | Specific MongoDB id of an appointment    |

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`                | object (JSON)                                                       |
> | <b>TO DO</b> `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |
>
> </details>

#### Customers

<details>
 <summary><code>GET</code> <code><b>/customers</b></code> <code>(get all customers)</code></summary>
  
##### Body

> | name             |  type     | data type      | description                              |
> |------------------|-----------|----------------|------------------------------------------|
> | None  |  required | N/A         | N/A    |

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`                | object (JSON)                                                       |
> | <b>TO DO</b> `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |
>
> </details>

<details>
 <summary><code>POST</code> <code><b>/customers/</b></code> <code>(create a new customer)</code></summary>
  
##### Body

> | name             |  type        | data type      | description                              |
> |------------------|--------------|----------------|------------------------------------------|
> | None             |  no required | N/A            | N/A                                      | 

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`                | object (JSON)                                                       |
> | <b>TO DO</b> `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |
>
> </details>

<details>
 <summary><code>GET</code> <code><b>/customers/:customerId</b></code> <code>(get customer information by {customerId})</code></summary>
  
##### Body

> | name             |  type     | data type      | description                              |
> |------------------|-----------|----------------|------------------------------------------|
> | {customerId}     |  required | String         | Specific MongoDB id of a customer        |

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`                | object (JSON)                                                       |
> | <b>TO DO</b> `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |
>
> </details>

<details>
 <summary><code>PUT</code> <code><b>/customers/:customerId</b></code> <code>(edit existing customer by {customerId})</code></summary>
  
##### Body

> | name             |  type     | data type      | description                              |
> |------------------|-----------|----------------|------------------------------------------|
> | {customerId}     |  required | String         | Specific MongoDB id of a customer        |

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`                | object (JSON)                                                       |
> | <b>TO DO</b> `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |
>
> </details>

<details>
 <summary><code>DELETE</code> <code><b>/customers/:customerId</b></code> <code>(delete a customer by {customerId})</code></summary>
  
##### Body

> | name             |  type     | data type      | description                              |
> |------------------|-----------|----------------|------------------------------------------|
> | {customerId}     |  required | String         | Specific MongoDB id of a customer        |

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`                | object (JSON)                                                       |
> | <b>TO DO</b> `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |
>
> </details>
