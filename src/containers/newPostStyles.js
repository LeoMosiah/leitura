export const styles = theme => ({
  layout: {
    textAlign: "center",
    border: "1px solid #ccc",
    width: 800,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing.unit * 20,
    padding: theme.spacing.unit * 5
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  header: {
    display: "flex",
    alignItems: "baseline"
  },
  button: {
    width: 300,
    letterSpacing: 3.5,
    fontSize: 20
  },
  bodyInput: {
    height: 300
  }
});
