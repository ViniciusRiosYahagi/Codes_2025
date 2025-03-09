<script lang="ts">
  type Person = {
    name: string
    surname: string
  }

  let people = $state<Person[]>([
    { name: 'Rich', surname: 'Harris' },
    { name: 'Vincy', surname: 'Rios' },
    { name: '003', surname: '0333' },
  ])

  let selected = $state<Person>()
  let person = $state({ name: '', surname: '' })

  let prefix = $state('')
  const filterPeople = $derived(
    prefix ? people.filter(p => p.surname.toLowerCase().startsWith(prefix)) : people
  )

  $effect(() => {
    person = {
      name: selected?.name ?? '',
      surname: selected?.surname ?? '',
    }
  })
</script>