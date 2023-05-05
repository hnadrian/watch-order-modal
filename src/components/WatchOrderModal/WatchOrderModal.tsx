import React, { useState, useEffect } from "react";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

interface WatchOrderModalProps {
  open: boolean;
  onClose: () => void;
}

const colors = {
  primaryGreen: "#1A3A32",
  secondaryGreen: "#1D7D67",
  modalBackgroundColor: "#FFFCF9",
  billingBackgroundColor: "#F6F4F1",
  primaryGreenText: "#314D46",
  secondaryGreenText: "#768882",
  secondaryBillingText: "#72847E",
  secondaryGrayText: "#9A9C9A",
};

const WatchOrderModal = (props: WatchOrderModalProps) => {
  const { open, onClose } = props;

  const [orderData, setOrderData] = useState<any>(null);

  // Fetching data from API
  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const response = await axios.get(
          "https://eb863a74-7a4e-4daf-9540-d2db8470c18e.mock.pstmn.io/marketplace/orders/123"
        );
        setOrderData(response.data);
      } catch (error) {
        console.error("Error fetching order data:", error);
      }
    };

    fetchOrderData();
  }, []);

  // POST request for accepting the deal
  const handleAcceptSale = async () => {
    try {
      await axios.post(
        "https://eb863a74-7a4e-4daf-9540-d2db8470c18e.mock.pstmn.io/marketplace/orders/123/accept"
      );
    } catch (error) {
      console.error("Error accepting sale:", error);
    }
  };

  // POST request for rejecting the deal
  const handleRejectSale = async () => {
    try {
      await axios.post(
        "https://eb863a74-7a4e-4daf-9540-d2db8470c18e.mock.pstmn.io/marketplace/orders/123/decline"
      );
    } catch (error) {
      console.error("Error rejecting sale:", error);
    }
  };

  // Catch if fetching is not done
  if (!orderData) {
    return <div></div>;
  }

  // Extracting data fetched into constants
  const {
    listing: {
      model: { displayName, brand, referenceNumber },
      manufactureYear,
      condition,
      images,
    },
    salePriceCents,
    commissionRateBips,
    sellerFeeCents,
    payoutAmountCents,
  } = orderData;

  // Converting cents to display format
  const centsToDollars = (cents: number) => {
    return (cents / 100).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          borderRadius: "35px",
          width: "830px",
          maxWidth: "70vw",
        },
      }}
    >
      <Box
        style={{
          backgroundColor: colors.modalBackgroundColor,
        }}
      >
        <Box display="flex" justifyContent="flex-end">
          <IconButton
            style={{ position: "absolute", top: "10px", right: "23px" }}
            edge="end"
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <DialogContent
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "80%",
          }}
        >
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box padding={"25px"}>
                <Box ml={3} mr={3}>
                  <Typography
                    variant="subtitle1"
                    color={colors.secondaryGrayText}
                    gutterBottom
                  >
                    CONGRATS!
                  </Typography>
                  <Typography
                    variant="h5"
                    color={colors.primaryGreenText}
                    gutterBottom
                    mb={4}
                  >
                    Your watch sold!
                  </Typography>
                  <Typography
                    variant="body2"
                    color={colors.secondaryGreenText}
                    gutterBottom
                  >
                    You have 1 business day to accept the sale.
                    <br />
                    If you do not accept, it will be automatically rejected.
                  </Typography>
                </Box>
                <Box mt={12} mb={1}>
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: colors.primaryGreen,
                      borderRadius: "25px",
                      height: "62px",
                      textTransform: "none",
                      fontWeight: "medium",
                    }}
                    fullWidth
                    onClick={handleAcceptSale}
                  >
                    Accept sale
                  </Button>
                </Box>
                <Box>
                  <Button
                    variant="text"
                    style={{
                      color: colors.primaryGreen,
                      borderRadius: "25px",
                      height: "62px",
                      textTransform: "none",
                      fontWeight: "medium",
                    }}
                    fullWidth
                    onClick={handleRejectSale}
                  >
                    Reject sale
                  </Button>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box padding={"10px"}>
                <Box
                  style={{ backgroundColor: colors.billingBackgroundColor }}
                  padding={"30px"}
                  borderRadius={"35px"}
                >
                  <Divider sx={{ mt: 1, mb: 1 }} />
                  <Box display="flex" alignItems="center">
                    <Box flexGrow={1}>
                      <Typography
                        variant="body2"
                        color={colors.primaryGreen}
                        sx={{ mb: 1 }}
                      >
                        {displayName}
                        <br />
                        {brand.displayName} {referenceNumber}
                      </Typography>
                      <Typography
                        variant="body2"
                        color={colors.secondaryBillingText}
                      >
                        {condition} / {manufactureYear}
                      </Typography>
                    </Box>
                    <Box>
                      <img
                        src={images[0].image.url}
                        //alt={`${/* Watch display name */} ${/* Watch  name */}`}
                        style={{ width: 75, height: 75, borderRadius: "12px" }}
                      />
                    </Box>
                  </Box>
                  <Divider sx={{ mt: 1, mb: 2 }} />
                  <Box my={2}>
                    <Grid container>
                      <Grid item xs={7}>
                        <Typography
                          variant="body2"
                          color={colors.secondaryBillingText}
                          sx={{ mb: 1 }}
                        >
                          Selling Price
                        </Typography>
                        <Typography
                          variant="body2"
                          color={colors.secondaryBillingText}
                          sx={{ mb: 1 }}
                        >
                          Level 1 Commission (
                          {(commissionRateBips / 100).toFixed(1)}%)
                        </Typography>
                        <Typography
                          variant="body2"
                          color={colors.secondaryBillingText}
                          sx={{ mb: 1 }}
                        >
                          Seller Fee
                        </Typography>
                        <Typography
                          variant="body2"
                          color={colors.secondaryGreen}
                          sx={{ mb: 2 }}
                        >
                          Bezel authentification
                        </Typography>
                      </Grid>
                      <Grid item xs={5}>
                        <Typography
                          variant="body2"
                          color={colors.primaryGreenText}
                          align="right"
                          fontWeight={"bold"}
                          sx={{ mb: 1 }}
                        >
                          {centsToDollars(salePriceCents)}
                        </Typography>
                        <Typography
                          variant="body2"
                          color={colors.secondaryBillingText}
                          align="right"
                          sx={{ mb: 1 }}
                        >
                          {centsToDollars(
                            (salePriceCents * commissionRateBips) / 10000
                          )}
                        </Typography>
                        <Typography
                          variant="body2"
                          color={colors.secondaryBillingText}
                          align="right"
                          sx={{ mb: 1 }}
                        >
                          {centsToDollars(sellerFeeCents)}
                        </Typography>
                        <Typography
                          variant="body2"
                          color={colors.secondaryGreen}
                          align="right"
                          sx={{ mb: 1 }}
                        >
                          Free
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                  <Divider sx={{ mt: 1, mb: 1 }} />
                  <Box my={2}>
                    <Grid container>
                      <Grid item xs={6}>
                        <Typography
                          variant="body2"
                          color={colors.primaryGreen}
                          fontWeight={"bold"}
                        >
                          Earnings
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography
                          variant="body2"
                          color={colors.primaryGreen}
                          align="right"
                          fontWeight={"bold"}
                        >
                          {centsToDollars(payoutAmountCents)}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default WatchOrderModal;
