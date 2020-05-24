import { Autocomplete, AutocompleteProps } from '@material-ui/lab';

interface MyAutocomplete<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
> extends AutocompleteProps<T, Multiple, DisableClearable, FreeSolo> {
  myProp?: string;
}

function MyAutocomplete<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
>(props: MyAutocomplete<T, Multiple, DisableClearable, FreeSolo>) {
  return <Autocomplete {...props} />;
}

// multiple prop can be assigned for components that extend AutocompleteProps
<MyAutocomplete
  options={['1', '2', '3']}
  onChange={(event, value) => {
    // $ExpectType string[]
    value;
  }}
  renderInput={() => null}
  multiple
/>;